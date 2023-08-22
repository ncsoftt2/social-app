import React from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";
import {AppWrapper} from "../../StyledComponents/AppWrapper";
import {ContentWrapper} from "../../StyledComponents/ContentWrapper";
import Users from "../Users/Users";

const App = () => {
    return (
        <AppWrapper>
            <Header/>
            <ContentWrapper>
                <Navbar/>
                <Routes>
                    <Route path={'/social-app/profile/*'} element={<Profile />}/>
                    <Route path={'/*'} element={<div>444</div>}/>
                    <Route path={'/social-app/dialogs/*'} element={<Dialogs />}/>
                    <Route path={'/social-app/users'} element={<Users />} />
                </Routes>
            </ContentWrapper>
        </AppWrapper>
    )
}

export default App;
