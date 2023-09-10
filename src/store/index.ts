import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch } from "redux-thunk";
import {UsersAction, usersReducer} from "./reducers/users-reducer/users-reducer";
import authReducer, {AuthActionType} from "./reducers/auth-reducer/auth-reducer";
import {AppActionType, appReducer} from "./reducers/app-reducer/app-reducer";
import {ProfileAction, profileReducer} from "./reducers/profile-reducer/profile-reducer";


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reducers = combineReducers({
    usersReducer,
    authReducer,
    appReducer,
    profileReducer
})
const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(thunk)))
export default store

export type Actions = UsersAction | AuthActionType | AppActionType | ProfileAction
export type RootState = ReturnType<typeof reducers>
export type AppDispatch = ThunkDispatch<RootState, unknown, Actions>
export type ThunkType = ThunkAction<void, RootState, unknown, Actions>