import React, {useReducer} from 'react'
import {LangContext} from "./langContext";
import {langReducer} from "./langReducer";
import {SET_EN, SET_RU} from "../types";

export const LangState = ({children}) => {
    const [state, dispatch] = useReducer(langReducer, {lang: 'ru'})

    const setRu = () => dispatch({type: SET_RU})

    const setEn = () => dispatch({type: SET_EN})

    return (
        <LangContext.Provider value={{
            setRu, setEn, lang: state
        }}>
            {children}
        </LangContext.Provider>
    )
}