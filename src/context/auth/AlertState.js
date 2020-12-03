import React, {useReducer} from 'react'
import {AuthContext} from "./authContext";
import {authReducer} from "./authReducer";
import {LOGIN, LOGOUT} from "../types";

export const AuthState = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {login: false})

    const login = () => dispatch({type: LOGIN})

    const logout = () => dispatch({type: LOGOUT})

    return (
         <AuthContext.Provider value={{
             login, logout, auth: state
         }}>
             {children}
         </AuthContext.Provider>
    )
}