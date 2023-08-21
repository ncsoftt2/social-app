import profileReducer, {AddPostType, ProfileStateType, UpdatePostMessage} from "./profile-reducer";
import {v1} from "uuid";


test('add new post', () => {
    const startState: ProfileStateType = {
        postMessage: 'new message',
        posts: [
            {id:v1(),message: 'first post', likesCount: 0},
            {id:v1(),message: 'second post', likesCount: 5},
            {id:v1(),message: 'third post', likesCount: 24},
        ]
    }
    const newMessage = 'new message'
    const action: AddPostType = {
        type:"ADD-POST",
        message: startState.postMessage
    }
    const endState = profileReducer(startState,action)
    expect(endState.posts.length).toBe(4)
    expect(endState.posts[0].message).toBe(newMessage)
})

test('update post message',() => {
    const startState: ProfileStateType = {
        postMessage: '',
        posts: [
            {id:v1(),message: 'first post', likesCount: 0},
            {id:v1(),message: 'second post', likesCount: 5},
            {id:v1(),message: 'third post', likesCount: 24},
        ]
    }
    const newMessage = 'new post message'
    const action: UpdatePostMessage = {
        type:"UPDATE-POST-MESSAGE",
        postMessage: newMessage
    }
    const endState = profileReducer(startState,action)
    expect(endState.postMessage).toBe(newMessage)
})