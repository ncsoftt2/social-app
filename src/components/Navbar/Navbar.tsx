import React from 'react';
import styles from './../../styles/Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Box, List, ListItem} from "@mui/material";

const Navbar = () => {
    return (
        <Box>
            <Box component={'nav'}>
                <List sx={{p: 0}} dense={true}>
                    <ListItem disablePadding sx={{mb: '10px'}}>
                        <NavLink to={'/social-app/profile'}
                                 style={{textDecoration: 'none'}}
                                 className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}`}
                        >Profile</NavLink>
                    </ListItem>
                    <ListItem disablePadding sx={{mb: '10px'}}>
                        <NavLink to={'/social-app/dialogs'}
                                 style={{textDecoration: 'none'}}
                                 className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}`}
                        >Dialogs</NavLink>
                    </ListItem>
                    <ListItem disablePadding sx={{mb: '10px'}}>
                        <NavLink to={'/social-app/users'}
                                 style={{textDecoration: 'none'}}
                                 className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}`}
                        >Users</NavLink>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Navbar;