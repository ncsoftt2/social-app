import React, {useEffect} from 'react';
import styles from './../../styles/Header.module.css';
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {setUserDataAC} from "../../store/auth-reducer/auth-reducer";
import axios from "axios";
import {authAPI} from "../../api/authAPI";
const Header = () => {
    const {data,isAuth} = useAppSelector(({authReducer}) => authReducer)
    const dispatch = useAppDispatch()
    const authMe = () => {
        authAPI.authMe()
            .then(res => {
                if(res.resultCode === 0) {
                    const {email,id,login} = res.data
                    dispatch(setUserDataAC(email,id,login))
                }
            })
    }
    useEffect(() => {
        authMe()
    },[])
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