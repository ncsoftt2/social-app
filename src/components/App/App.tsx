import React from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import {Outlet} from "react-router-dom";

import {AppWrapper} from "../../StyledComponents/AppWrapper";
import {ContentWrapper} from "../../StyledComponents/ContentWrapper";

const App = () => {
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