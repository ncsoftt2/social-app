import {ThunkType} from "../../index";
import {usersAPI} from "../../../api/usersAPI";

export type UserType = {
    name: string | null
    id: number
    photos: {
        small?: null | string,
        large?: null | string
    }
    status: null | string
    followed: boolean
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
export type SetFilterType = ReturnType<typeof setFilterAC>

export type UsersAction = GetUsersType | FollowType | UnFollowType |
    SetTotalUsersType | SetCurrentPageType |
    SetIsFetchingType | ToggleIsFollowingProgress | SetFilterType

export type UserStateType = {
    users: UserType[]
    pageSize: number
    totalUsers: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
    filter: {
        term: string
        friend: null | boolean
    }
}

const initialState: UserStateType = {
    users: [] as UserType[],
    pageSize: 12,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [] as number[],
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

type InitialState = typeof initialState
export type FilterType = typeof initialState.filter

export const usersReducer = (state = initialState, action: UsersAction): InitialState => {
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
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(el => el !== action.userId)
            }
        case "SET-FILTER":
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state
    }
}

export const getUsersAC = (users: UserType[]): GetUsersType => ({type: "GET-USERS", users})
export const followAC = (userId: number): FollowType => ({type: "FOLLOW", userId})
export const unfollowAC = (userId: number): UnFollowType => ({type: "UNFOLLOW", userId})
const setTotalUsersAC = (totalUsers: number): SetTotalUsersType => ({type: "SET-TOTAL-USERS", totalUsers})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageType => ({type: "SET-CURRENT-PAGE", currentPage})
const toggleFetchingAC = (isFetching: boolean): SetIsFetchingType => ({type: "TOGGLE-IS-FETCHING", isFetching})
export const toggleIsFollowingProgress = (isFetchingProgress: boolean, userId: number): ToggleIsFollowingProgress =>
    ({type: "TOGGLE-IS-FOLLOWING-PROGRESS", userId, isFetchingProgress})
const setFilterAC = (filter:FilterType) => ({type:"SET-FILTER",payload:filter} as const)

export const getUsersThunk = (currentPage: number, pageSize: number,filter:FilterType): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFetchingAC(true))
        dispatch(setCurrentPageAC(currentPage))
        dispatch(setFilterAC(filter))
        const data = await usersAPI.getUsersAPI(currentPage, pageSize,filter.term,filter.friend)
        dispatch(getUsersAC(data.items))
        dispatch(setTotalUsersAC(data.totalCount))
        dispatch(toggleFetchingAC(false))
    }
}


export const unfollowThunk = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        const response = await usersAPI.unfollowAPI(userId)
        if (response.resultCode === 0) {
            dispatch(unfollowAC(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
    }
}
export const followThunk = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        const response = await usersAPI.followAPI(userId)
        if (response.resultCode === 0) {
            dispatch(followAC(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
    }
}