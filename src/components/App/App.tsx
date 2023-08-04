import React from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import {Route, Routes} from "react-router-dom";
import './app.css'
import state from "../../store/state";
import Dialogs from "../Dialogs/Dialogs";


const App = () => {
    return (
        <section className={'app'}>
            <Header />
            <div className={'content'}>
                <Navbar />
                <Routes>
                    <Route path={'/dialogs'} element={<Dialogs dialogs={state.dialogsPage.dialogs}
                                                               messages={state.dialogsPage.messages}/>}
                    />
                    <Route path={'/profile'} element={<Profile posts={state.profilePage.posts}/>}/>
                </Routes>
            </div>
        </section>
    )
}

export default App;
