
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

export type SetUserDataType = {
    type:"SET-USER-DATA",
    data: DataType
}

export type ActionType = SetUserDataType

const authReducer = (state = initialState, action: ActionType) => {
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