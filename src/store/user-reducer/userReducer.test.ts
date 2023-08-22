import {v1} from "uuid";
import userReducer, {FollowType, SetCurrentPageType, SetTotalUsersType, UserStateType} from "./userReducer";

test('followed false should be true',() => {
    const userId1 = v1();
    const userId2 = v1();
    const startState:UserStateType = {
        users: [
            {name: "Shubert", id: v1(), photos: {small: null, large: null}, status: null, followed: true},
            {name: "Shubert", id: v1(), photos: {small: null, large: null}, status: null, followed: false},
        ],
        pageSize: 5,
        totalUsers: 0,
        currentPage:1,isFetching:false
    }
    const action:FollowType = {
        type:"FOLLOW",
        userId: userId1
    }
    const endState = userReducer(startState,action)
    expect(endState.users[0].followed).toBe(true)
})
test('followed true should be false',() => {
    const userId1 = v1();
    const userId2 = v1();
    const startState:UserStateType = {
        users: [
            {name: "Shubert", id: v1(), photos: {small: null, large: null}, status: null, followed: false},
            {name: "Shubert", id: v1(), photos: {small: null, large: null}, status: null, followed: true},
        ],
        pageSize: 8,
        totalUsers: 0,
        currentPage:1,isFetching:false
    }
    const action:FollowType = {
        type:"FOLLOW",
        userId: userId2
    }
    const endState = userReducer(startState,action)
    expect(endState.users[0].followed).toBe(false)
})

test('set total users',() => {
    const startState:UserStateType = {
        users: [
            {name: "Shubert", id: v1(), photos: {small: null, large: null}, status: null, followed: false},
            {name: "Shubert", id: v1(), photos: {small: null, large: null}, status: null, followed: true},
        ],
        pageSize: 8,
        totalUsers: 0,
        currentPage:1,
        isFetching: false
    }
    const action: SetTotalUsersType = {
        type:"SET-TOTAL-USERS",
        totalUsers: 50
    }
    const endState = userReducer(startState,action)
    expect(endState.totalUsers).toBe(50)
})

test('set current page', () => {
    const startState:UserStateType = {
        users: [
            {name: "Shubert", id: v1(), photos: {small: null, large: null}, status: null, followed: false},
            {name: "Shubert", id: v1(), photos: {small: null, large: null}, status: null, followed: true},
        ],
        pageSize: 8,
        totalUsers: 0,
        currentPage:1,
        isFetching:false
    }
    const action: SetCurrentPageType = {
        type:"SET-CURRENT-PAGE",
        currentPage: 20
    }
    const endState = userReducer(startState,action)
    expect(endState.currentPage).toBe(20)
})