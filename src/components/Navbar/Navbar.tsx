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
                        <NavLink to={'/social-app/profile'}
                                 className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}` }
                        >Profile</NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink to={'/social-app/dialogs'}
                                 className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}` }
                        >Dialogs</NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink to={'/social-app/users'}
                                 className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}` }
                        >Users</NavLink>
                    </li>
                </ul>
            </nav>
        </NavbarWrapper>
    );
};

export default Navbar;