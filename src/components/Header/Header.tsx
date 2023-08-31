import React, {useEffect} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {logoutThunk} from "../../store/auth-reducer/auth-reducer";
const Header = () => {
    const {data} = useAppSelector(({authReducer}) => authReducer)
    const dispatch = useAppDispatch()
    const handleClickLogout = () => dispatch(logoutThunk())
    const navigate = useNavigate()

    useEffect(() => {
        if(!data.isAuth) navigate('/social-app/login')
    },[data.isAuth])
    return (
        <AppBar position="static">
            <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
                <IconButton color='inherit'>
                    <MenuIcon/>
                </IconButton>
                <Typography variant='h5' component='div'>info about social-app</Typography>
                <Box>
                    {data.isAuth && (
                        <Box sx={{display:'flex', alignItems:'center',gap:'5px'}}>
                            <Box>{data.email}</Box>
                            <Button variant={'contained'} color={'error'} onClick={handleClickLogout}>logout</Button>
                        </Box>
                    )}
                    {
                        !data.isAuth && <NavLink to={'/social-app/login'}>
                        <Button variant={'outlined'} color={'success'}>Login</Button>
                        </NavLink>
                    }
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;