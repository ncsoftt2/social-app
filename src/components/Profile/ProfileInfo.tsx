import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {getProfileThunk, getStatusThunk} from "../../store/profile-reducer/profile-reducer";
import styled from "styled-components";
import {ProfileStatus} from "./ProfileStatus";

const urlImg = 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'


const ProfileInfo = () => {
    const params = useParams<'*'>()
    const {profileReducer: {profile,status}, authReducer: {isAuth,data}} = useAppSelector((state) => state)
    const paramId = params["*"] && +params['*']
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const getProfile = () => {
        let userId = paramId
        if (!userId && data.id !== null) {
            userId = data.id
        }
        // @ts-ignore
        dispatch(getProfileThunk(userId))
        // @ts-ignore
        dispatch(getStatusThunk(userId))
    }
    useEffect(() => {
        getProfile()
    }, [paramId])
    if(!isAuth) navigate('/social-app/login')

    return (
        <ProfileInfoWrapper>
            <ProfileStatus status={status}/>
            <div>full name:{profile.fullName}</div>
            <div>
                <img src={profile.photos && profile.photos.large !== null ? profile.photos.large : urlImg}
                     alt={'img'}/>
            </div>
            <div>about me:{profile.aboutMe}</div>
            <div>looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
            <div>{profile.lookingForAJob && profile.lookingForAJobDescription}</div>
        </ProfileInfoWrapper>

    );
};

export default ProfileInfo;


const ProfileInfoWrapper = styled.div`
  border: 2px solid black;
  text-align: center;
  border-radius: 5px;
  div {
    margin: 10px 0;
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`