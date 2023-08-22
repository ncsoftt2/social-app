import React, {useEffect} from 'react';
import styles from './../../styles/Header.module.css';
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {setUserDataAC} from "../../store/auth-reducer/auth-reducer";
import axios from "axios";
const Header = () => {
    const {data,isAuth} = useAppSelector(({authReducer}) => authReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true,
            headers: {
                "API-KEY": "974e9f2b-a26c-4888-891b-d2b3c8dd1403"
            }
        })
            .then(res => {
                if(res.data.resultCode === 0) {
                    const {email,id,login} = res.data.data
                    dispatch(setUserDataAC(email,id,login))
                    console.log(res.data)
                }
            })
    },[])
    console.log(data)
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