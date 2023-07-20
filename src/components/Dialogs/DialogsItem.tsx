import React from 'react';
import styles from '../../styles/Dialogs.module.css';
import {NavLink} from "react-router-dom";

const image = 'https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg'


interface PropsType {
    name: string
    id: string
}

const DialogsItem: React.FC<PropsType> = ({name, id}) => {
    return (
        <>
            <NavLink to={`/dialogs/${id}`}
                     className={({isActive}) => `${styles.link} ${isActive ? styles.active : null}`}
            >
                <div className={styles.dialog}>
                    <div>
                        <img src={image} alt={"avatar"}/>
                    </div>
                    <div>{name}</div>
                </div>
            </NavLink>

        </>
    );
};

export default DialogsItem;