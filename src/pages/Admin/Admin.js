import React, {useContext} from 'react'
import {NavLink} from "react-router-dom";
import firebase from "firebase";
import './Admin.scss'
import {ScrollToTopOnMount} from "../../utils/scroll";
import {AuthContext} from "../../context/auth/authContext";

export const Admin = () => {
    const {logout} = useContext(AuthContext)

    const doLogout = () => {
        firebase.auth().signOut().then(function() {
            logout();
        }).catch(function(error) {
            console.log(error)
        });
    }

    return (
        <main>
            <ScrollToTopOnMount />

            <section className='admin'>
                <div className="container">
                    <div className="admin__wrapper">
                        <ul className="admin__list">
                            <li className='admin__item'>
                                <NavLink to='/create' className='admin__link'>Creator</NavLink>
                            </li>

                            <li className='admin__item'>
                                <NavLink to='/delete' className='admin__link'>Delete</NavLink>
                            </li>

                            <li className='admin__item'>
                                <NavLink to='/' className='admin__link' onClick={() => doLogout()}>Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}