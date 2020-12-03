import React from 'react'
import './Footer.scss'

export const Footer = () => {
    return (
        <section className='footer'>
            <div className='container'>
                <h2 className='visually-hidden'>Footer</h2>

                <p className='footer__text'>
                    Copyright © 2020 Elizaveta filips.
                    <br/>
                    All Rights Reserved
                </p>
            </div>
        </section>
    )
}