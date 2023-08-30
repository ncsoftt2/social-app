import React, {useEffect} from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import {Outlet} from "react-router-dom";

import {AppWrapper} from "../../StyledComponents/AppWrapper";
import {ContentWrapper} from "../../StyledComponents/ContentWrapper";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Spinner} from "../Spinner/Spinner";
import {initialize} from "../../store/app-reducer/app-reducer";

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
        <AppWrapper>
            <Header/>
            <ContentWrapper>
                <Navbar/>
                <Outlet />
            </ContentWrapper>
        </AppWrapper>
    )
}
export default App;


// <Routes>
//     <Route path={'/social-app/profile/*'} element={<Profile />}/>
//     <Route path={'/*'} element={<div>444</div>}/>
//     <Route path={'/social-app/dialogs/*'} element={<Dialogs />}/>
//     <Route path={'/social-app/users'} element={<Users />} />
// </Routes>