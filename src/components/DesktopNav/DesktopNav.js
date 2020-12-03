import React, {useContext, useState} from 'react'
import './DesktopNav.scss'
import {NavLink} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import {AuthContext} from "../../context/auth/authContext";

export const DesktopNav = () => {

    const {auth} = useContext(AuthContext)

    const [galleryVision, setGalleryVision] = useState(false);

    return (
        <ul className='desktop-nav__list'>
            <li className='desktop-nav__item'>
                <NavLink to='/about' className='desktop-nav__link' onClick={() => setGalleryVision(false)}>About</NavLink>
            </li>

            <li className='desktop-nav__item desktop-nav__item--gallery'>
                <button className='desktop-nav__link desktop-nav__button' onClick={() => setGalleryVision(!galleryVision)}>Gallery</button>

                <CSSTransition
                    in={galleryVision}
                    timeout={{
                        enter: 500,
                        exit: 300
                    }}
                    classNames='desktop-nav-gallery'
                    mountOnEnter
                    unmountOnExit
                >
                    <ul className='desktop-nav__gallery-list'>
                        <li className='desktop-nav__gallery-item'>
                            <NavLink to='/paintings' className='desktop-nav__gallery-link' onClick={() => setGalleryVision(false)}>Paintings</NavLink>
                        </li>
                        <li className='desktop-nav__gallery-item'>
                            <NavLink to='/works' className='desktop-nav__gallery-link' onClick={() => setGalleryVision(false)}>Works on paper</NavLink>
                        </li>
                        <li className='desktop-nav__gallery-item'>
                            <NavLink to='/paper' className='desktop-nav__gallery-link' onClick={() => setGalleryVision(false)}>Paper</NavLink>
                        </li>
                    </ul>
                </CSSTransition>
            </li>

            <li className='desktop-nav__item'>
                <NavLink to='/art-n-space' className='desktop-nav__link' onClick={() => setGalleryVision(false)}>Art&Space</NavLink>
            </li>

            <li className='desktop-nav__item'>
                <NavLink to='/contacts' className='desktop-nav__link' onClick={() => setGalleryVision(false)}>Contacts</NavLink>
            </li>

            <li className='desktop-nav__item'>
                <NavLink to='/cv' className='desktop-nav__link' onClick={() => setGalleryVision(false)}>Cv</NavLink>
            </li>

            <li className='desktop-nav__item'>
                <NavLink to='/live' className='desktop-nav__link' onClick={() => setGalleryVision(false)}>Live from the studio</NavLink>
            </li>

            { auth
                ? (
                    <li className='desktop-nav__item'>
                        <NavLink to='/admin' className='desktop-nav__link' onClick={() => setGalleryVision(false)}>Admin</NavLink>
                    </li>
                )
                : null
            }
        </ul>
    )
}