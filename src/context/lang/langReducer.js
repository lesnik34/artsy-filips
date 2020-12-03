import {SET_RU, SET_EN} from "../types";

export const langReducer = (state, action) => {
    switch (action.type) {
        case SET_RU: return {...state, lang: 'ru'}
        case SET_EN: return {...state, lang: 'en'}
        default: return state
    }
}