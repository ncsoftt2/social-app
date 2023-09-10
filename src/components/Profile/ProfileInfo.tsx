import {
    getProfileThunk,
    getStatusThunk,
    ProfileType,
    savePhotoThunk
} from "../../store/reducers/profile-reducer/profile-reducer";
import {DataType} from "../../store/reducers/auth-reducer/auth-reducer";
import React, {ChangeEvent, FC, useCallback, useEffect} from "react";
import {Box, Button, Grid, TextField} from "@mui/material";
import {userImg} from "../users/Users";
import {useAppDispatch} from "../../store/hooks";
import {useNavigate, useParams} from "react-router-dom";
import {ProfileStatus} from "./ProfileStatus";

type PropsType = {
    profile: ProfileType
    status: string
    data: DataType
}

export const ProfileInfo: FC<PropsType> = (props) => {
    const {status, data, profile} = props
    console.log('PROFILE INFO')
    const dispatch = useAppDispatch()
    const params = useParams<'*'>()
    let paramId = Number(params['*'])
    const navigate = useNavigate()
    const getProfile = () => {
        let userId: number | null = paramId
        if (!userId) {
            userId = data.id
        }
        if (userId !== null) {
            dispatch(getProfileThunk(userId))
            dispatch(getStatusThunk(userId))
        }
    }
    useEffect(() => {
        getProfile()
    }, [paramId])
    useEffect(() => {
        if (data.id === paramId || paramId === 0) navigate(`/profile/${data.id}`)
    }, [data.id])
    const changePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        // if(e.target.files !== null) {
        //     dispatch(savePhotoThunk(e.target.files[0]))
        // }
        // const file = e.target.files?.[0];
        // dispatch(savePhotoThunk(file))
        let files = e.currentTarget.files;
        if (files && files.length > 0) {
            const file = files[0];
            dispatch(savePhotoThunk(file));
        }
    }
    return (
        <Grid container>
            <Grid item xs={3} sx={{padding: '10px'}}>
                <img
                    style={{width: '100%',backgroundSize:'cover'}}
                    src={profile.photos && profile.photos.large !== null ? profile.photos.large : userImg}
                    alt={profile.fullName ? profile.fullName : 'avatar'}/>
                 <input type='file' onChange={changePhoto}/>
            </Grid>
            <Grid item xs={9} sx={{padding: '10px'}}>
                <ProfileStatus status={status} data={data} paramId={paramId}/>
                <Box sx={{mb:1,display:'flex',alignItems:'center',gap:1}}>
                    <Box>Имя: </Box>
                    <Box sx={{fontSize: '16px'}}>{profile.fullName}</Box>
                </Box>
                {profile.aboutMe ? <Box sx={{mb: 1}}>Обо мне: {profile.aboutMe}</Box> : null}
            </Grid>
        </Grid>
    )
}