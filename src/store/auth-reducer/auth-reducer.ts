
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