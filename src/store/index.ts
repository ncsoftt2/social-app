import {applyMiddleware, combineReducers, compose, createStore, Dispatch, legacy_createStore} from "redux";
import profileReducer, {ProfileAction} from "./profile-reducer/profile-reducer";
import dialogsReducer, {DialogsActionType} from "./dialogs-reducer/dialogs-reducer";
import userReducer, {UsersAction} from "./user-reducer/userReducer";
import authReducer, {AuthActionType} from "./auth-reducer/auth-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk"

import {AppActionType, appReducer} from "./app-reducer/app-reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    userReducer,
    authReducer,
    appReducer
})
const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(thunk)))
export default store

type Actions = ProfileAction | DialogsActionType | AuthActionType | UsersAction | AppActionType
export type RootState = ReturnType<typeof reducers>
export type AppDispatch = ThunkDispatch<RootState, unknown, Actions>
export type ThunkType = ThunkAction<void, RootState, unknown, Actions>