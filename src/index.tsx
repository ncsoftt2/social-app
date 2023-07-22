import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './styles/index.css';
import {BrowserRouter} from "react-router-dom";
import {v1} from "uuid";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export interface IPostsType {
    id: string
    message: string
    likeCount: number
}
export interface IDialogsType {
    id: string
    name: string
}
export interface IMessagesType {
    id: string
    message: string
}
export interface IPropsType {
    posts?: IPostsType[]
    dialogs?: IDialogsType[]
    messages?: IMessagesType[]
}

const data = {
    posts: [
        {id: v1(), message: 'first post', likeCount: 0},
        {id: v1(), message: 'third post', likeCount: 2},
        {id: v1(), message: 'fourth post', likeCount: 32},
    ],
    dialogs: [
        {id: v1(), name: 'Jett'},
        {id: v1(), name: 'Sage'},
        {id: v1(), name: 'Reyna'},
    ],
    messages: [
        {id: v1(), message: "Consectetur adipisicing elit. Hic, temporibus?"},
        {id: v1(), message: "Dolor sit amet."},
        {id: v1(), message: "Sit amet, consectetur adipisicing."},
        {id: v1(), message: "Lorem ipsum dolor."},
    ]
}

root.render(
    <BrowserRouter>
        <App {...data}/>
    </BrowserRouter>
);
