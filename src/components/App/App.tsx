import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import {Grid} from "@mui/material";
import { Sidebar } from "../sidebar/Sidebar";
import {useAppDispatch, useAppSelector } from "../../store/hooks";
import { initialize } from "../../store/reducers/app-reducer/app-reducer";

export const App = () => {
    const dispatch = useAppDispatch()
    const {initialized} = useAppSelector(({appReducer}) => appReducer)
    useEffect(() => {
        dispatch(initialize())
    }, [])
    if (!initialized) {
        return <div>loading...</div>
    }
    return (
        <>
            <Header />
            <Grid container sx={{padding: '10px 50px'}}>
                <Grid item xs={2} sx={{fontSize:'16px',borderRight:1}}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={10}>
                    <Outlet/>
                </Grid>
            </Grid>
        </>
    )
}