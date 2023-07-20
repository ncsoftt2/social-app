import React from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import './app.css'
import {Route, Routes} from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";

const App = () => {
    return (
        <div className={'app'}>
            <Header />
            <section className={'content'}>
                <Navbar />
                <Routes>
                    <Route path={'/dialogs/'} element={<Dialogs />}/>
                    <Route path={'/profile'} element={<Profile />}/>
                </Routes>
            </section>
        </div>
    )
}

export default App;
