import React from "react";
import {Grid} from "@mui/material";
import { ProfileInfo } from "./ProfileInfo";
import { Posts } from "./Posts";
import { useAppSelector } from "../../store/hooks";


export const Profile = () => {
    const {
        profileReducer:{posts,profile, status},
        authReducer: {data},
    } = useAppSelector(state => state)
    return (
        <Grid container gap={2}>
            <Grid item xs={12}>
                <ProfileInfo profile={profile} status={status} data={data}/>
            </Grid>
            <Grid item xs={12} sx={{border:1,padding:'10px'}}>
                <Posts/>
            </Grid>
        </Grid>
    )
}