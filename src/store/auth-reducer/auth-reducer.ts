import {authAPI} from "../../api/authAPI";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";

interface DataType {
    id: number | null
    email: string | null
    login: string | null
}

interface AuthType {
    data: DataType
    isAuth: boolean
}

const initialState:AuthType = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false
}

type SetUserDataType = {
    type:"SET-USER-DATA",
    data: DataType
}

export type ActionType = SetUserDataType
type InitialState = typeof initialState

const authReducer = (state = initialState, action: ActionType):InitialState => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                data: action.data,
                isAuth: true
            }
        default: return state
    }
}

export default authReducer

export const setUserDataAC = (email:string,id:number,login:string):SetUserDataType => ({
    type:"SET-USER-DATA",
    data: {email,id,login}
})

type ThunkType = ThunkAction<void, RootState, unknown, ActionType>

export const authThunk = ():ThunkType => async (dispatch) => {
    return authAPI.authMe()
        .then(res => {
            if(res.resultCode === 0) {
                const {email,id,login} = res.data
                dispatch(setUserDataAC(email,id,login))
            }
        })
}