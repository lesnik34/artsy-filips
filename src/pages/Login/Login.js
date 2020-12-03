import React, {useContext, useState} from 'react'
import './Login.scss'
import firebase from "firebase";
import {AuthContext} from "../../context/auth/authContext";
import {ScrollToTopOnMount} from "../../utils/scroll";
import {Popup} from "../../components/Popup/Popup";

export const Login = () => {
    const {login} = useContext(AuthContext);

    const [message, setMessage] = useState(null)

    const submitHandler = (e) => {
        e.preventDefault()

        firebase.auth().signInWithEmailAndPassword(e.target[0].value, e.target[1].value)
            .then((user) => {
                setMessage({
                    title: 'Success',
                    text: 'Вы успешно вошли',
                    type: 'success'
                });

                login();
            })
            .catch((error) => {
                console.log(error.code, error.message)
                setMessage({
                    title: error.code,
                    text: error.message,
                    type: 'error'
                });
            });
    };

    return (
        <main>
            <ScrollToTopOnMount/>

            {
                message
                ? <Popup
                    title={message.title}
                    text={message.text}
                    type={message.type}
                    resetMessage={() => setMessage(null)} />
                : null
            }

            <section className='login'>
                <div className="container">
                    <h1 className='visually-hidden'>Login</h1>


                    <div className='login__wrapper'>
                        <form onSubmit={submitHandler}>
                            <div className='login__input'>
                                <label className='login__label' htmlFor="email">Email</label>
                                <input className='login__type' type="email" id='email' required/>
                            </div>

                            <div className='login__input'>
                                <label className='login__label' htmlFor="pass">Password</label>
                                <input className='login__type' type="text" id='pass' required/>
                            </div>

                            <button
                                className='login__submit'
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}