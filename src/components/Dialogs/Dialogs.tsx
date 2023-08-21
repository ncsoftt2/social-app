import React from 'react';
import {DialogsPageType} from "../../store/state";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import styles from "../../styles/Dialogs.module.css";

const image = 'https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg'



const Dialogs: React.FC<DialogsPageType> = ({dialogs,messages}) => {
    const dialogsItem = dialogs.map(({id,name}) =>   {
        return (

                <NavLink to={`/dialogs/${id}`}>
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
            <ul>
                {dialogsMessages}
            </ul>
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