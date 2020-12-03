import {LOGIN, LOGOUT} from "../types";

export const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN: return {...state, login: true}
        case LOGOUT: return {...state, login: false}
        default: return state
    }
}