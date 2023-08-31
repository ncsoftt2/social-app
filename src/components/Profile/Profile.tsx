import React from 'react';
import Posts from "./Posts";
import ProfileInfo from "./ProfileInfo";
import {Container, Grid} from "@mui/material";


const Profile = () => {
    return (
        <Container>
            <ProfileInfo/>
            <Posts/>
        </Container>
    )
}

export default Profile;
