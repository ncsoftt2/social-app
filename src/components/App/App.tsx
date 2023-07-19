import React from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import './app.css'

const App = () => {
    return (
        <div className={'app'}>
            <Header />
            <section>
                <Navbar />
                <Profile />
            </section>
        </div>
    )
}

export default App;
