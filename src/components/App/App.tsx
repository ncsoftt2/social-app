import React from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";
import {AppWrapper} from "../../StyledComponents/AppWrapper";
import {ContentWrapper} from "../../StyledComponents/ContentWrapper";

const App = () => {
    return (
        <AppWrapper>
            <Header/>
            <ContentWrapper>
                <Navbar/>
                <Routes>
                    <Route path={'/profile'} element={<Profile />}/>
                    <Route path={'/dialogs/*'} element={<Dialogs />}/>
                </Routes>
            </ContentWrapper>
        </AppWrapper>
    )
}

export default App;
