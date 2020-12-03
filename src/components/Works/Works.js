import React from 'react'
import './Works.scss'
import {WorksSlider} from "../WorksSlider/WorksSlider"

export const Works = () => {
    return (
        <section className='works parallax__group'>
            <div className='works__wrapper'>
                <div className="container">
                    <h2 className='works__title'>my works</h2>
                </div>

                <WorksSlider />
            </div>

            <div className='works__img parallax__element' />
        </section>
    )
}