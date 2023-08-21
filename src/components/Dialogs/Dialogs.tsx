import React, {ChangeEvent} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {addNewMessageAC, updateDialogBodyMessageAC} from "../../store/dialogs-reducer/dialogs-reducer";

const image = 'https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg'


const Dialogs = () => {
    const {messages,dialogMessage,dialogs}  = useAppSelector(({dialogsReducer}) => dialogsReducer)
    const dispatch = useAppDispatch()
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateDialogBodyMessageAC(e.currentTarget.value))
    }
    const handleAddNewMessage = () => {
        if(dialogMessage.trim().length !== 0 ) {
            dispatch(addNewMessageAC(dialogMessage.trim()))
        }
    }
    const dialogsItem = dialogs.map(({id,name}) =>   {
        return (
                <NavLink to={`/dialogs/${id}`} key={id}>
                    <DialogWrapper>
                        <img src={image} alt={"avatar"}/>
                        <span>{name}</span>
                    </DialogWrapper>
                </NavLink>

        )
    })
    const dialogsMessages = messages.map(({id,message}) => {
        return (
            <li key={id}>{message}</li>
        )
    })
    return (
        <DialogsWrapper>
            <nav>
                {dialogsItem}
            </nav>
            <TAWrapper>
                <ul>
                    {dialogsMessages}
                </ul>
                <div>
                    <textarea value={dialogMessage} onChange={handleChange}/>
                    <button onClick={handleAddNewMessage}>&gt;</button>
                </div>
            </TAWrapper>
        </DialogsWrapper>
    );
};

export default Dialogs;

const DialogsWrapper = styled.div`
  width: 700px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;

  ul {
    width: 100%;
    background-color: #ececec;
  }

  ul > li {
    font-size: 16px;
    color: #262626;
    margin: 5px 0 0 5px;
  }

  ul > li:first-child {
    margin: 0 0 0 5px;
  }

  nav {
    height: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }

  nav > a {
    text-decoration: none;
    color: black;
  }

  nav > a.active {
    text-decoration: none;
    color: #24a7ff;
  }
`
const DialogWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 200px;
  font-size: 18px;
  cursor: pointer;
  padding: 5px;
  background: #e7e7e7;
  border-bottom: 1px solid rgba(0, 0, 0, 0.13);
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`

const TAWrapper = styled.div`
  width: 100%;
  position: relative;
  div {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
  }
  textarea {
    resize: none;
    outline: none;
    width: 100%;
  }
`