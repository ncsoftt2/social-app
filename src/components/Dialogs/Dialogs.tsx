import React from 'react';
import styles from '../../styles/Dialogs.module.css'
import DialogsItem from "./DialogsItem";
import DialogsMessages from "./DialogsMessages";
import {IPropsType} from "../../index";

const Dialogs: React.FC<IPropsType> = ({dialogs,messages}) => {

    return (
        <section className={styles.section}>
            <nav>
                {dialogs && dialogs.map(({id,name}) =>  <DialogsItem name={name} id={id}/>)}
            </nav>
            <div>
                {messages && messages.map(({id,message}) => <DialogsMessages message={message} key={id}/> )}
            </div>
        </section>
    );
};

export default Dialogs;