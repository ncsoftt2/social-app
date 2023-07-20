import React from 'react';
import styles from '../../styles/Dialogs.module.css'
import {NavLink} from "react-router-dom";


const image = 'https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg'

const Dialogs = () => {
    return (
        <section className={styles.section}>
            <ul className={styles.dialogs_item}>
                <NavLink to={'/dialogs/1'}
                         className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}` }
                >
                    <li className={styles.dialog}>
                        <div>
                            <img src={image} alt={"avatar"}/>
                        </div>
                        <div>Name 1</div>
                    </li>
                </NavLink>
                <NavLink to={'/dialogs/2'}
                         className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}` }
                >
                    <li className={styles.dialog}>
                        <div>
                            <img src={image} alt={"avatar"}/>
                        </div>
                        <div>Name 2</div>
                    </li>
                </NavLink>
                <NavLink to={'/dialogs/3'}
                         className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}` }
                >
                    <li className={styles.dialog}>
                        <div>
                            <img src={image} alt={"avatar"}/>
                        </div>
                        <div>Name 3</div>
                    </li>
                </NavLink>
                {/*<li className={styles.dialog}>*/}
                {/*    <NavLink to={'/dialogs/1'}*/}
                {/*             className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}` }*/}
                {/*    >Jett</NavLink>*/}
                {/*</li>*/}
                {/*<li className={styles.dialog}>*/}
                {/*    <NavLink to={'/dialogs/2'}*/}
                {/*             className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}` }*/}
                {/*    >Sage</NavLink>*/}
                {/*</li>*/}
                {/*<li className={styles.dialog}>*/}
                {/*    <NavLink to={'/dialogs/3'}*/}
                {/*             className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}` }*/}
                {/*    >Reyna</NavLink>*/}
                {/*</li>*/}
                {/*<li className={styles.dialog}>*/}
                {/*    <NavLink to={'/dialogs/4'}*/}
                {/*             className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}` }*/}
                {/*    >Raze</NavLink>*/}
                {/*</li>*/}
            </ul>
            <ul className={styles.messages_item}>
                <li className={styles.message}>message 1</li>
                <li className={styles.message}>useless message</li>
                <li className={styles.message}>just text</li>
            </ul>
        </section>
    );
};

export default Dialogs;