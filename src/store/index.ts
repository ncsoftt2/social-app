import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer/profile-reducer";
import dialogsReducer from "./dialogs-reducer/dialogs-reducer";
import userReducer from "./user-reducer/userReducer";
import authReducer from "./auth-reducer/auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./app-reducer/app-reducer";

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
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch