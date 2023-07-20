import React from 'react';
import styles from '../../styles/Dialogs.module.css'
import DialogsItem from "./DialogsItem";
import DialogsMessages from "./DialogsMessages";

const Dialogs = () => {
    return (
        <section className={styles.section}>
            <div>
                <DialogsItem name={"Name 1"} id={'1'}/>
                <DialogsItem name={"Name 2"} id={'2'}/>
                <DialogsItem name={"Name 3"} id={'3'}/>
            </div>
            <div>
                <DialogsMessages message={"Consectetur adipisicing elit. Hic, temporibus?"}/>
                <DialogsMessages message={"Dolor sit amet."}/>
                <DialogsMessages message={`Sit amet, consectetur adipisicing elit. 
                    Dignissimos dolore eum expedita facilis harum inventore molestias
                    mollitia natus nemo odit officia rerum saepe, sunt, vitae.`
                }/>
                <DialogsMessages message={"Sit amet, consectetur adipisicing."}/>
                <DialogsMessages message={"Lorem ipsum dolor."}/>
            </div>
        </section>
    );
};

export default Dialogs;