import React, {useEffect} from 'react';
import styles from './../../styles/Header.module.css';
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../store/hooks";
const Header = () => {
    const {data,isAuth} = useAppSelector(({authReducer}) => authReducer)
    return (
        <header className={styles.header}>
            <h2 className={styles.logo}>
                <NavLink to={'/'}>Logo</NavLink>
            </h2>
            <div className={styles.header_desc}>info about social-app</div>
            <div>
                {
                    isAuth ? <div>{data.email}</div> : <NavLink to={'/social-app/login'}>login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;