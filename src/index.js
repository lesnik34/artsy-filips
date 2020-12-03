import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {AuthState} from "./context/auth/AlertState";
import {LangState} from "./context/lang/LangState";

ReactDOM.render(
    <AuthState>
        <LangState>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </LangState>
    </AuthState>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
