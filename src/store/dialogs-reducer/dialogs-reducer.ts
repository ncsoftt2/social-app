import {v1} from "uuid";

export interface MessagesType {
    id: string
    message: string
}
export interface DialogsType {
    id:string
    name:string
}

export interface DialogStateType {
    messages: MessagesType[]
    dialogs: DialogsType[]
    dialogMessage: string
}

const initialState:DialogStateType = {
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

export type AddNewMessage = {
    type: "ADD-NEW-MESSAGE"
    message: string
}
export type UpdateDialogBodyMessage = {
    type: "UPDATE-DIALOG-BODY-MESSAGE"
    dialogMessage: string
}
type ActionType = AddNewMessage | UpdateDialogBodyMessage
const dialogsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            const newMessage:MessagesType = {id: v1(),message: state.dialogMessage}
            return {
                ...state,
                messages: [...state.messages,newMessage],
                dialogMessage: ''
            }
        case "UPDATE-DIALOG-BODY-MESSAGE":
            return {
                ...state,
                dialogMessage: action.dialogMessage
            }

        default: return state
    }
}

export default dialogsReducer;

export const addNewMessageAC = (message:string):AddNewMessage => (
    {type:"ADD-NEW-MESSAGE",message}
)
export const updateDialogBodyMessageAC = (dialogMessage: string):UpdateDialogBodyMessage => (
    {type:"UPDATE-DIALOG-BODY-MESSAGE",dialogMessage}
)