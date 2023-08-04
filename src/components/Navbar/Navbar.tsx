import React from 'react';
import styles from './../../styles/Navbar.module.css';
import {NavLink} from "react-router-dom";
import {NavbarWrapper} from "../../StyledComponents/NavbarWrapper";

const Navbar = () => {
    return (
        <NavbarWrapper>
            <nav>
                <ul>
                    <li className={styles.nav_item}>
                        <NavLink to={'/profile'}
                                 className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}` }
                        >Profile</NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink to={'/dialogs'}
                                 className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}` }
                        >Dialogs</NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink to={'/users'}
                                 className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}` }
                        >Users</NavLink>
                    </li>
                </ul>
            </nav>
        </NavbarWrapper>
    );
};

export default Navbar;