
export type UserType = {
    name: string
    id: string
    photos: {
        small: null,
        large: null
    }
    status: null
    followed: boolean
}

export type UserStateType = {
    users: UserType[]
}

export type GetUsersType = {
    type: "GET-USERS"
    users: UserType[]
}
export type FollowType = {
    type: "FOLLOW"
    userId: string
}
export type UnFollowType = {
    type: "UNFOLLOW"
    userId: string
}

type ActionType = GetUsersType | FollowType | UnFollowType

const initialState:UserStateType = {
    users: []
}
const userReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "GET-USERS":
            return {
                ...state,
                users: action.users
            }
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(el => {
                    if(el.id === action.userId) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(el => {
                    if(el.id === action.userId) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        default: return state
    }
}
export default userReducer;

export const getUsersAC = (users:UserType[]):GetUsersType => ({type:"GET-USERS",users})
export const followAC = (userId:string):FollowType => ({type:"FOLLOW",userId})
export const unfollowAC = (userId:string):UnFollowType => ({type:"UNFOLLOW",userId})