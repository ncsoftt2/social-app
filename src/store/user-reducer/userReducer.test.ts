import {v1} from "uuid";
import userReducer, {FollowType, UserStateType} from "./userReducer";

test('followed false should be true',() => {
    const userId1 = v1();
    const userId2 = v1();
    const startState:UserStateType = {
        users: [
            {name: "Shubert", id: v1(), photos: {small: null, large: null}, status: null, followed: true},
            {name: "Shubert", id: v1(), photos: {small: null, large: null}, status: null, followed: false},
        ]
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
        ]
    }
    const action:FollowType = {
        type:"FOLLOW",
        userId: userId2
    }
    const endState = userReducer(startState,action)
    expect(endState.users[0].followed).toBe(false)
})