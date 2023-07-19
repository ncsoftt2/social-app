import React from 'react';
import styles from './../../styles/Header.module.css';
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.logo}>
                <NavLink to={'/'}>Logo</NavLink>
            </h2>
            <div className={styles.header_desc}>info about social-app</div>
        </header>
    );
};

export default Header;