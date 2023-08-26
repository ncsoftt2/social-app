import {RootState} from "../index";
import {usersAPI} from "../../api/usersAPI";
import {ThunkAction} from "redux-thunk";

export type UserType = {
    name: string | null
    id: number
    photos: {
        small: null | string,
        large: null | string
    }
    status: null
    followed: boolean | null
}

export type UserStateType = {
    users: UserType[]
    pageSize: number
    totalUsers: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
}

const initialState: UserStateType = {
    users: [],
    pageSize: 8,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [] as number[]
}

export type GetUsersType = {
    type: "GET-USERS"
    users: UserType[]
}
export type FollowType = {
    type: "FOLLOW"
    userId: number
}
export type UnFollowType = {
    type: "UNFOLLOW"
    userId: number
}
export type SetTotalUsersType = {
    type: "SET-TOTAL-USERS"
    totalUsers: number
}
export type SetCurrentPageType = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}
export type SetIsFetchingType = {
    type: "TOGGLE-IS-FETCHING",
    isFetching: boolean
}
export type ToggleIsFollowingProgress = {
    type: "TOGGLE-IS-FOLLOWING-PROGRESS",
    isFetchingProgress: boolean,
    userId: number
}

export type ActionType = GetUsersType | FollowType | UnFollowType |
    ToggleIsFollowingProgress | SetTotalUsersType | SetCurrentPageType |
    SetIsFetchingType

type InitialState = typeof initialState

const userReducer = (state = initialState, action: ActionType):InitialState => {
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
                    if (el.id === action.userId) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: false}
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
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                users: state.users,
                isFetching: action.isFetching
            }
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingProgress: action.isFetchingProgress
                    ? [...state.followingProgress,action.userId]
                    : state.followingProgress.filter(el => el !== action.userId)
            }
        default:
            return state
    }
}
export default userReducer;


export const getUsersAC = (users: UserType[]): GetUsersType => ({type: "GET-USERS", users})
export const followAC = (userId: number): FollowType => ({type: "FOLLOW", userId})
export const unfollowAC = (userId: number): UnFollowType => ({type: "UNFOLLOW", userId})
export const setTotalUsersAC = (totalUsers: number): SetTotalUsersType => ({type: "SET-TOTAL-USERS", totalUsers})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageType => ({type: "SET-CURRENT-PAGE", currentPage})
export const toggleFetchingAC = (isFetching: boolean): SetIsFetchingType => ({type: "TOGGLE-IS-FETCHING", isFetching})
export const toggleIsFollowingProgress = (isFetchingProgress: boolean,userId:number): ToggleIsFollowingProgress =>
    ({type: "TOGGLE-IS-FOLLOWING-PROGRESS",userId,isFetchingProgress})


export type ThunkType = ThunkAction<void,RootState,unknown,ActionType>

export const getUsersThunk = (currentPage:number,pageSize:number):ThunkType => async (dispatch) => {
    dispatch(toggleFetchingAC(true))
    const data = await usersAPI.getUsersAPI(currentPage, pageSize)
    dispatch(getUsersAC(data.items))
    dispatch(setTotalUsersAC(data.totalCount))
    dispatch(toggleFetchingAC(false))
}