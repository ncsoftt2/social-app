import React, {useEffect} from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import {Outlet} from "react-router-dom";
import {AppWrapper} from "../../StyledComponents/AppWrapper";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Spinner} from "../Spinner/Spinner";
import {initialize} from "../../store/app-reducer/app-reducer";
import {Container, Grid} from "@mui/material";

const App = () => {
    const dispatch = useAppDispatch()
    const {initialized} = useAppSelector(({appReducer}) => appReducer)
    useEffect(() => {
       // @ts-ignore
        dispatch(initialize())
    },[])
    if(!initialized) {
        return <Spinner />
    }
    return (
        <>
            <Header/>
            <Container sx={{mt:2}}>
                <Grid container sx={{display:'flex'}}>
                    <Grid xs={2}>
                        <Navbar/>
                    </Grid>
                    <Grid xs={10}>
                        <Outlet />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default App;


// <Routes>
//     <Route path={'/social-app/profile/*'} element={<Profile />}/>
//     <Route path={'/*'} element={<div>444</div>}/>
//     <Route path={'/social-app/dialogs/*'} element={<Dialogs />}/>
//     <Route path={'/social-app/users'} element={<Users />} />
// </Routes>