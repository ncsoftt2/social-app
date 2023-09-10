import {ThunkType} from "../../index";
import {authThunk} from "../auth-reducer/auth-reducer";

const initialState = {
    initialized: false
}

type SetInitialize = {
    type: "SET_INITIALIZE",
}
export type AppActionType = SetInitialize

export const appReducer = (state = initialState, action:AppActionType) => {
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


export const initialize = ():ThunkType => (dispatch) => {
    const promise = dispatch(authThunk())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitializedSuccess())
        })
}