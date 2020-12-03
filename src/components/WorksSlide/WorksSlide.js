import React from 'react'
import './WorksSlide.scss'
import {NavLink} from "react-router-dom";

export const WorksSlide = (props) => {
    return (
        <div className='slide__overlay'>
            <div className='container slide__container'>
                <div className="slide">
                    <div className='slide__wrapper'>
                        <div className="slider__item">
                            <img className='slider__img' src={props.url} alt={`Картина ${props.name}`}/>
                        </div>

                        <div className="slider__info">
                            <div className="slider__title">
                                <h3 className='slider__header'>{props.name}</h3>

                                <span className='slider__size'>{props.size}</span>
                            </div>

                            <p className='slider__text'>{props.description}</p>
                        </div>

                        <NavLink className='slider__link' to={`/${props.category}`}>see more</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
