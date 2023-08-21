import dialogsReducer, {AddNewMessage, DialogStateType, UpdateDialogBodyMessage} from "./dialogs-reducer";
import {v1} from "uuid";

test('add new message',() => {
    const startState:DialogStateType = {
        messages: [
            {id:v1(),message:'first message'},
            {id:v1(),message:'second message'},
        ],
        dialogs: [
            {id:v1(),name: 'Jett'},
            {id:v1(),name: 'Sage'},
        ],
        dialogMessage: 'new dialog message'
    }
    const newMessage = 'new dialog message'
    const action: AddNewMessage = {
        type: "ADD-NEW-MESSAGE",
        message: 'new dialog message'
    }
    const endState = dialogsReducer(startState,action)
    expect(endState.messages.length).toBe(3)
    expect(endState.messages[2].message).toBe(newMessage)
})

test('update dialog body message',() => {
    const startState:DialogStateType = {
        messages: [
            {id:v1(),message:'first message'},
            {id:v1(),message:'second message'},
        ],
        dialogs: [
            {id:v1(),name: 'Jett'},
            {id:v1(),name: 'Sage'},
        ],
        dialogMessage: ''
    }
    const dialogMessage = 'new dialog message'
    const action: UpdateDialogBodyMessage = {
        type: "UPDATE-DIALOG-BODY-MESSAGE",
        dialogMessage: dialogMessage
    }
    const endState = dialogsReducer(startState,action)
    expect(endState.dialogMessage).toBe(dialogMessage)
})