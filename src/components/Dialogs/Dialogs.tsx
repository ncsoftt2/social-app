import React from 'react';
import DialogsItem from "./DialogsItem";
import DialogsMessages from "./DialogsMessages";
import {DialogsPageType} from "../../store/state";
import {SectionWrapper} from "../../StyledComponents/SectionWrapper";


const Dialogs: React.FC<DialogsPageType> = ({dialogs,messages}) => {
    return (
        <SectionWrapper display={'flex'}>
            <nav>
                {dialogs && dialogs.map(({id,name}) =>  <DialogsItem name={name} id={id}/>)}
            </nav>
            <div>
                {messages && messages.map(({id,message}) => <DialogsMessages message={message} key={id}/> )}
            </div>
        </SectionWrapper>
    );
};

export default Dialogs;