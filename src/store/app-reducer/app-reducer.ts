import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {authThunk} from "../auth-reducer/auth-reducer";

const initialState = {
    initialized: false
}

type SetInitialize = {
    type: "SET_INITIALIZE",
}
type ActionType = SetInitialize

export const appReducer = (state = initialState, action:ActionType) => {
    switch (action.type) {
        case "SET_INITIALIZE":
            return {
                ...state,
                initialized: true
            }
        default: return state
    }
}
export const setInitializedSuccess = ():SetInitialize => ({type:"SET_INITIALIZE"})

type ThunkType = ThunkAction<void, RootState, unknown, ActionType>

export const initialize = ():ThunkType => (dispatch) => {
    const promise = dispatch(authThunk())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitializedSuccess())
        })
}