import {v1} from "uuid";
import {renderTree} from "../index";


export interface PostType {
    id: string
    message: string
    likesCount: number
}

export interface MessageType {
    id: string
    message: string
}

export interface DialogType {
    id: string
    name: string
}

export interface ProfilePageType {
    postMessage: string
    posts: PostType[]
}
export interface DialogsPageType {
    messages: MessageType[]
    dialogs: DialogType[]
}

export interface StateType {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

const state:StateType = {
    profilePage: {
        postMessage: '',
        posts: [
            {id:v1(),message: 'first post', likesCount: 0},
            {id:v1(),message: 'second post', likesCount: 5},
            {id:v1(),message: 'third post', likesCount: 24},
        ]
    },
    dialogsPage: {
        messages: [
            {id:v1(),message:'first message'},
            {id:v1(),message:'second message'},
        ],
        dialogs: [
            {id:v1(),name: 'Jett'},
            {id:v1(),name: 'Sage'},
        ]
    }
}
export default state

export const addPost = (message: string) => {
    const newPost:PostType = {id: v1(),message,likesCount: 0}
    state.profilePage.posts.push(newPost)
    renderTree(state)
}

export const addPostMessage = (newMessage: string) => {
    state.profilePage.postMessage = newMessage
    renderTree(state)
}