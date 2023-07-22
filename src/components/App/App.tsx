import React from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";
import {IPropsType} from "../../index";
import './app.css'


const App:React.FC<IPropsType> = ({posts,dialogs,messages}) => {
    return (
        <section className={'app'}>
            <Header />
            <div className={'content'}>
                <Navbar />
                <Routes>
                    <Route path={'/dialogs'} element={<Dialogs dialogs={dialogs} messages={messages}/>}/>
                    <Route path={'/profile'} element={<Profile posts={posts}/>}/>
                </Routes>
            </div>
        </section>
    )
}

export default App;
