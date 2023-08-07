import React from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import {Route, Routes} from "react-router-dom";
import state from "../../store/state";
import Dialogs from "../Dialogs/Dialogs";
import {AppWrapper} from "../../StyledComponents/AppWrapper";
import {ContentWrapper} from "../../StyledComponents/ContentWrapper";

const App = () => {
    return (
        <AppWrapper>
            test
            <Header />
            <ContentWrapper>
                <Navbar />
                <Routes>
                    <Route path={'/dialogs'} element={<Dialogs dialogs={state.dialogsPage.dialogs}
                                                               messages={state.dialogsPage.messages}/>}
                    />
                    <Route path={'/profile'} element={<Profile posts={state.profilePage.posts}/>}/>
                </Routes>
            </ContentWrapper>
        </AppWrapper>
    )
}

export default App;
