import React from 'react'
import './Promo.scss'
// import {Link} from 'react-scroll'

export const Promo = () => {
    return (
        <section className='promo parallax__group'>
            <h1 className='visually-hidden'>Artsy filips paintings</h1>

            <div className='promo__img parallax__element' />

            <div className='promo__wall parallax__wall'></div>

            {/*<Link*/}
            {/*    className='promo__arrow'*/}
            {/*    to='about__wrapper'*/}
            {/*    containerId='parallax'*/}
            {/*    smooth={true}*/}
            {/*    duratio={500}*/}
            {/*    offset={document.documentElement.clientHeight + 59} />*/}
        </section>
    )
}