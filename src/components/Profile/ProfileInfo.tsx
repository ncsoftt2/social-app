import {
    ContactType,
    getProfileThunk,
    getStatusThunk,
    ProfileType,
    savePhotoThunk
} from "../../store/reducers/profile-reducer/profile-reducer";
import {DataType} from "../../store/reducers/auth-reducer/auth-reducer";
import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {Grid } from "@mui/material";
import {userImg} from "../users/Users";
import {useAppDispatch} from "../../store/hooks";
import {useNavigate, useParams} from "react-router-dom";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileAboutUser} from "./ProfileAboutUser";
import { ProfileForm } from "./ProfileForm";

type PropsType = {
    profile: ProfileType
    status: string
    data: DataType
}

export const ProfileInfo: FC<PropsType> = (props) => {
    const {status, data, profile} = props
    const [edit, setEdit] = useState(false)
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
    const changePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        let files = e.currentTarget.files;
        if (files && files.length > 0) {
            const file = files[0];
            dispatch(savePhotoThunk(file));
        }
    }
    useEffect(() => {
        getProfile()
    }, [paramId])
    useEffect(() => {
        if (data.id === paramId || paramId === 0) navigate(`/social-app/profile/${data.id}`)
    }, [data.id])
    return (
        <Grid container>
            <Grid item xs={3} sx={{padding: '10px'}}>
                <img
                    style={{width: '100%', backgroundSize: 'cover'}}
                    src={profile.photos && profile.photos.large !== null ? profile.photos.large : userImg}
                    alt={profile.fullName ? profile.fullName : 'avatar'}/>
                {data.id === paramId ? <input type='file' onChange={changePhoto}/> : null}
            </Grid>
            <Grid item xs={9} sx={{padding: '10px'}}>
                <ProfileStatus status={status} data={data} paramId={paramId}/>
                {!edit && <ProfileAboutUser profile={profile}
                                            setEdit={setEdit}
                                            data={data}
                                            paramId={paramId}
                />}
                {edit && <ProfileForm profile={profile}
                                      setEdit={setEdit}
                />}
            </Grid>
        </Grid>
    )
}
