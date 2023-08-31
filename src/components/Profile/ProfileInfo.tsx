import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {getProfileThunk, getStatusThunk} from "../../store/profile-reducer/profile-reducer";
import styled from "styled-components";
import {ProfileStatus} from "./ProfileStatus";
import {Box, Grid, ImageListItem} from "@mui/material";

const urlImg = 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'


const ProfileInfo = () => {
    const params = useParams<'*'>()
    const {profileReducer: {profile,status}, authReducer: {isAuth,data}} = useAppSelector((state) => state)
    const paramId = params["*"] && +params['*']
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const getProfile = () => {
        let userId = paramId
        if (!userId && data.id ) {
            userId = data.id
        }
        if(typeof userId === 'number') {
            dispatch(getProfileThunk(userId))
            dispatch(getStatusThunk(userId))
        }
    }
    useEffect(() => {
        getProfile()
    }, [paramId])
    if(!isAuth) navigate('/social-app/login')

    return (
        <Grid container>
            <Grid item xs={3}>
                <ImageListItem sx={{width: '200px', height: '200px'}}>
                    <img
                        src={profile.photos && profile.photos.large !== null ? profile.photos.large : urlImg}
                        alt={'img'}
                        loading="lazy"
                    />
                </ImageListItem>
            </Grid>
            <Grid item xs={9} sx={{mt:1}}>
                <Grid container sx={{alignItems:'center',mb:1}}>
                    <Box sx={{mr:1}}>Статус:</Box>
                    <ProfileStatus status={status}/>
                </Grid>
                <Box sx={{mb:1}}>Имя: {profile.fullName}</Box>
                <Box sx={{mb:1}}>Обо мне: {profile.aboutMe}</Box>
                <Box sx={{mb:1}}>Ищу работу: {profile.lookingForAJob ? "да" : 'нет'}</Box>
                <Box sx={{mb:1}}>{profile.lookingForAJob && profile.lookingForAJobDescription}</Box>
            </Grid>
        </Grid>
    );
};

export default ProfileInfo;
