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
    pageSize: number
    totalUsers: number
    currentPage: number
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
export type SetTotalUsersType = {
    type: "SET-TOTAL-USERS"
    totalUsers: number
}
export type SetCurrentPageType = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}

type ActionType = GetUsersType | FollowType | UnFollowType | SetTotalUsersType | SetCurrentPageType

const initialState: UserStateType = {
    users: [],
    pageSize: 8,
    totalUsers: 0,
    currentPage: 1
}
const userReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "GET-USERS":
            return {
                ...state,
                users: action.users,
            }
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        case "SET-TOTAL-USERS":
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage,
            }
        default:
            return state
    }
}
export default userReducer;

export const getUsersAC = (users: UserType[]): GetUsersType => ({type: "GET-USERS", users})
export const followAC = (userId: string): FollowType => ({type: "FOLLOW", userId})
export const unfollowAC = (userId: string): UnFollowType => ({type: "UNFOLLOW", userId})
export const setTotalUsersAC = (totalUsers: number): SetTotalUsersType => ({type: "SET-TOTAL-USERS", totalUsers})
export const setCurrentPageAC = (currentPage:number): SetCurrentPageType => ({type:"SET-CURRENT-PAGE",currentPage})
