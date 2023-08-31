import React from 'react';
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../store/hooks";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    const {data,isAuth} = useAppSelector(({authReducer}) => authReducer)
    return (
        <AppBar position="static">
            <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
                <IconButton color='inherit'>
                    <MenuIcon/>
                </IconButton>
                <Typography variant='h5' component='div'>info about social-app</Typography>
                <div>
                    {
                        isAuth ? <div>{data.email}</div> : <NavLink to={'/social-app/login'}>login</NavLink>
                    }
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;