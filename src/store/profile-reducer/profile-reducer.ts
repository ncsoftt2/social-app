import {v1} from "uuid";
import {profileAPI} from "../../api/profileAPI";
import {ThunkAction} from 'redux-thunk'
import {RootState} from "../index";

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
    userId: number | null
    aboutMe: string | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: ContactType
    photos: {
        small: string | null
        large: string | null
    }
}

export interface ProfileStateType {
    postMessage: string
    posts: PostType[]
    profile: ProfileType
}

const initialState: ProfileStateType = {
    postMessage: '',
    posts: [
        {id: v1(), message: 'first post', likesCount: 0},
        {id: v1(), message: 'second post', likesCount: 5},
        {id: v1(), message: 'third post', likesCount: 24},
    ],
    profile: {} as ProfileType
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

export type ActionType = AddPostType | UpdatePostMessage | GetProfileType

const profileReducer = (state = initialState, action: ActionType) => {
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

export type ThunkType = ThunkAction<void, RootState, unknown, ActionType>

export const getProfileThunk = (userId: number): ThunkType => {
    return async (dispatch) => {
        const data = await profileAPI.getProfile(userId)
        dispatch(getProfileAC(data))
    }
}