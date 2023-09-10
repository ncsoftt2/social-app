import React,{ useEffect } from "react";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logoutThunk } from "../../store/reducers/auth-reducer/auth-reducer";
import {Link, useNavigate} from "react-router-dom";


export const Header = () => {
    const {data} = useAppSelector(({authReducer}) => authReducer)
    const dispatch = useAppDispatch()
    const handleClickLogout = () => dispatch(logoutThunk())
    const navigate = useNavigate()
    useEffect(() => {
        if (!data.isAuth) navigate('/social-app/login')
    }, [data.isAuth])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Box>
                        {data.isAuth && (
                            <Box sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                                <Box>{data.email}</Box>
                                <Button variant={'contained'} color={'error'} onClick={handleClickLogout}>logout</Button>
                            </Box>
                        )}
                        {
                            !data.isAuth && <Link to={'/login'}>
                                <Button variant={'outlined'} color={'success'}>Login</Button>
                            </Link>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}