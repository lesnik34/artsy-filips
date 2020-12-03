import React, {useContext, useState} from 'react'
import './Burger.scss'
import {NavLink} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import {AuthContext} from "../../context/auth/authContext";

export const Burger = (props) => {
    const {auth} = useContext(AuthContext);

    const [galleryVision, setGalleryVision] = useState(false);

    const changeToggle = () => props.setToggle(!props.toggle);

    return (
        <div className='burger__overlay'>
            <div className={'burger ' + props.state}>
                <ul className='burger__list'>
                    <li className='burger__item burger__item--standard'>
                        <NavLink to='/' className='burger__link' onClick={changeToggle}>Home</NavLink>
                    </li>

                    <li className='burger__item burger__item--standard'>
                        <NavLink to='/about' className='burger__link' onClick={changeToggle}>About</NavLink>
                    </li>

                    <li className='burger__item burger__item--gallery'>
                        <button className='burger__link burger__button' onClick={() => setGalleryVision(!galleryVision)}>Gallery</button>

                        <CSSTransition
                            in={galleryVision}
                            timeout={{
                                enter: 500,
                                exit: 300
                            }}
                            classNames='burger-gallery'
                            mountOnEnter
                            unmountOnExit
                        >
                            <ul className='burger__gallery-list'>
                                <li className='burger__gallery-item'>
                                    <NavLink to='/paintings' className='burger__gallery-link' onClick={changeToggle}>Paintings</NavLink>
                                </li>
                                <li className='burger__gallery-item'>
                                    <NavLink to='/works' className='burger__gallery-link' onClick={changeToggle}>Works on paper</NavLink>
                                </li>
                                <li className='burger__gallery-item'>
                                    <NavLink to='/paper' className='burger__gallery-link' onClick={changeToggle}>Paper</NavLink>
                                </li>
                            </ul>
                        </CSSTransition>
                    </li>

                    <li className='burger__item'>
                        <NavLink to='/art-n-space' className='burger__link' onClick={changeToggle}>Art&Space</NavLink>
                    </li>

                    <li className='burger__item'>
                        <NavLink to='/contacts' className='burger__link' onClick={changeToggle}>Contacts</NavLink>
                    </li>

                    <li className='burger__item'>
                        <NavLink to='/cv' className='burger__link' onClick={changeToggle}>Cv</NavLink>
                    </li>

                    <li className='burger__item'>
                        <NavLink to='/live' className='burger__link' onClick={changeToggle}>Live from the studio</NavLink>
                    </li>

                    {
                        auth.login
                            ? (
                                <li className='burger__item'>
                                    <NavLink to='/admin' className='burger__link' onClick={changeToggle}>Admin</NavLink>
                                </li>
                            )
                            : null
                    }
                </ul>
            </div>
        </div>
    )
}