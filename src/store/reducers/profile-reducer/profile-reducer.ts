import {v1} from "uuid";
import {ThunkType} from "../../index";
import {profileAPI} from "../../../api/profileAPI";

export interface PostType {
    id: string
    message: string
    likesCount: number
}

export interface ContactType {
    github: string
    vk: string
    facebook: string
    youtube: string
    instagram: string
    twitter: string
    website: string
    mainLink: string
}

export interface ProfileType {
    userId?: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactType
    photos?: {
        small?: string
        large?: string
    }
}

export interface ProfileStateType {
    posts: PostType[]
    profile: ProfileType
    status: string
}

const initialState: ProfileStateType = {
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
export type GetProfileType = {
    type: "GET-PROFILE"
    profile?: ProfileType
}
export type GetStatus = {
    type: "GET-STATUS",
    status: string
}
export type RemovePostType = {
    type: "REMOVE-POST"
    postId: string
}
export type SavePhotoType = {
    type:"SAVE_PHOTO"
    photos: string
}
export type SaveProfileType = {
    type:"SAVE_PROFILE"
    profile: ProfileType
}
export type ProfileAction = AddPostType | GetProfileType | GetStatus | RemovePostType | SavePhotoType | SaveProfileType

export const profileReducer = (state = initialState, action: ProfileAction) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {id: v1(), message: action.message, likesCount: 0}
            return {
                ...state,
                posts: [newPost, ...state.posts],
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
        case "REMOVE-POST":
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case "SAVE_PHOTO":
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }
            case "SAVE_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export const addPostAC = (message: string): AddPostType => ({type: "ADD-POST", message})
export const removePostAC = (postId: string): RemovePostType => ({type: "REMOVE-POST", postId})
export const getProfileAC = (profile: ProfileType): GetProfileType => ({type: "GET-PROFILE", profile})
const getStatus = (status: string): GetStatus => ({type: "GET-STATUS", status})
const savePhotoAC = (photos: string):SavePhotoType => ({type:"SAVE_PHOTO",photos})
const saveProfileAC = (profile: ProfileType):SaveProfileType => ({type:"SAVE_PROFILE",profile})

export const getProfileThunk = (userId: number): ThunkType => {
    return async (dispatch) => {
        const data = await profileAPI.getProfile(userId)
        dispatch(getProfileAC(data))
    }
}
export const getStatusThunk = (userId: number): ThunkType => {
    return async (dispatch) => {
        const data = await profileAPI.getStatusApi(userId)
        dispatch(getStatus(data))
    }
}
export const updateStatusThunk = (status: string): ThunkType => async (dispatch) => {
    const response = await profileAPI.updateStatusApi(status)
    if (response.data.resultCode === 0) {
        dispatch(getStatus(status))
    }
}

export const savePhotoThunk = (file: File):ThunkType => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoAC(response.data.data.photos))
    }
}
export const saveProfileThunk = (profile: ProfileType,userId:number):ThunkType => async (dispatch,getState) => {
    // const userId = getState().authReducer.data.id
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getProfileThunk(userId))
    }
}