import {combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer/profile-reducer";
import dialogsReducer from "./dialogs-reducer/dialogs-reducer";
import userReducer from "./user-reducer/userReducer";
import authReducer from "./auth-reducer/auth-reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers({
            profileReducer,
            dialogsReducer,
            userReducer,
            authReducer
        }
    )
    , composeEnhancers()
)

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch