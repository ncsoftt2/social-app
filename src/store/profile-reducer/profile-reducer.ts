import {v1} from "uuid";
import {profileAPI} from "../../api/profileAPI";
import {ThunkAction} from 'redux-thunk'
import { RootState, ThunkType} from "../index";
import {Dispatch} from "redux";

interface PostType {
    id: string | null
    message: string | null
    likesCount: number | null
}

interface ContactType {
    github: string | null
    vk: string | null
    facebook: string | null
    youtube: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    mainLink: string | null
}

export interface ProfileType {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactType
    photos: {
        small: string
        large: string
    }
}

export interface ProfileStateType {
    postMessage: string
    posts: PostType[]
    profile: ProfileType
    status: string
}

const initialState: ProfileStateType = {
    postMessage: '',
    posts: [
        {id: v1(), message: 'first post', likesCount: 0},
        {id: v1(), message: 'second post', likesCount: 5},
        {id: v1(), message: 'third post', likesCount: 24},
    ],
    profile: {} as ProfileType,
    status: ''
}

export type AddPostType = {
    type: "ADD-POST"
    message: string
}
export type UpdatePostMessage = {
    type: "UPDATE-POST-MESSAGE"
    postMessage: string
}
export type GetProfileType = {
    type: "GET-PROFILE"
    profile: ProfileType
}
export type GetStatus = {
    type: "GET-STATUS",
    status: string
}
export type ProfileAction = AddPostType | UpdatePostMessage | GetProfileType | GetStatus

const profileReducer = (state = initialState, action: ProfileAction) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {id: v1(), message: state.postMessage, likesCount: 0}
            return {
                ...state,
                posts: [newPost, ...state.posts],
                postMessage: ''
            }
        case "UPDATE-POST-MESSAGE":
            return {
                ...state,
                postMessage: action.postMessage
            }
        case "GET-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "GET-STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}


export default profileReducer;

export const addPostAC = (message: string): AddPostType => ({type: "ADD-POST", message})
export const updatePostMessageAC = (postMessage: string): UpdatePostMessage => ({
    type: "UPDATE-POST-MESSAGE",
    postMessage
})
export const getProfileAC = (profile: ProfileType): GetProfileType => ({type: "GET-PROFILE", profile})
const getStatus = (status: string):GetStatus => ({type:"GET-STATUS",status})

export const getProfileThunk = (userId: number):ThunkType => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        const data = await profileAPI.getProfile(userId)
        dispatch(getProfileAC(data))
    }
}
export const getStatusThunk = (userId:number): ThunkAction<void, RootState, unknown, ProfileAction> => {
    return async (dispatch) => {
        const data = await profileAPI.getStatusApi(userId)
        dispatch(getStatus(data))
    }
}
export const updateStatusThunk = (status:string):ThunkType => {
    return async (dispatch) => {
        profileAPI.updateStatusApi(status)
            .then(res => {
                if(res.data.resultCode === 0) {
                    dispatch(getStatus(status))
                }
            })
    }
}