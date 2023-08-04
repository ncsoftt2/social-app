import {v1} from "uuid";


export interface PostType {
    id?: string
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