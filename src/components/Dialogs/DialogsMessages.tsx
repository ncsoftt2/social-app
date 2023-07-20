import React from 'react';
import styles from "../../styles/Dialogs.module.css";

interface PropsType {
    message: string
}

const DialogsMessages: React.FC<PropsType> = ({message}) => {
    return (
        <div className={styles.messages_item}>{message}</div>
    );
};

export default DialogsMessages;