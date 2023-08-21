import {v1} from "uuid";

interface PostType {
    id: string
    message: string
    likesCount: number
}
export interface ProfileStateType {
    postMessage: string
    posts: PostType[]
}
const initialState:ProfileStateType = {
    postMessage: '',
    posts: [
        {id:v1(),message: 'first post', likesCount: 0},
        {id:v1(),message: 'second post', likesCount: 5},
        {id:v1(),message: 'third post', likesCount: 24},
    ]
}

export type AddPostType = {
    type: "ADD-POST"
    message: string
}
export type UpdatePostMessage = {
    type: "UPDATE-POST-MESSAGE"
    postMessage: string
}

type ActionType = AddPostType | UpdatePostMessage

const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost:PostType = {id:v1(),message:state.postMessage,likesCount: 0}
            return {
                ...state,
                posts: [newPost,...state.posts],
                postMessage: ''
            }
        case "UPDATE-POST-MESSAGE":
            return {
                ...state,
                postMessage: action.postMessage
            }
        default: return state
    }
}


export default profileReducer;

export const addPostAC = (message: string):AddPostType => ({type:"ADD-POST",message})
export const updatePostMessageAC = (postMessage: string):UpdatePostMessage => ({type:"UPDATE-POST-MESSAGE",postMessage})