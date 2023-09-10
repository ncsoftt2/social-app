import {ThunkType} from "../../index";
import {authAPI} from "../../../api/authAPI";

export interface DataType {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

interface AuthType {
    data: DataType
    isAuth: boolean
}

const initialState: AuthType = {
    data: {
        id: null,
        email: null,
        login: null,
        isAuth: false
    },
    isAuth: false
}

type SetUserDataType = {
    type: "SET-USER-DATA",
    payload: DataType
}

export type AuthActionType = SetUserDataType
type InitialState = typeof initialState

const authReducer = (state = initialState, action: AuthActionType): InitialState => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default authReducer

export const setUserDataAC = (email: string | null, id: number | null, login: string | null, isAuth: boolean): SetUserDataType => ({
    type: "SET-USER-DATA",
    payload: {email, id, login, isAuth}
})
export const authThunk = (): ThunkType => async (dispatch) => {
    const response = await authAPI.authMe()
    if (response.resultCode === 0) {
        const {email, id, login} = response.data
        dispatch(setUserDataAC(email, id, login, true))
    }
}

export const loginThunk = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(authThunk())
    }
}
export const logoutThunk = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
    }

}