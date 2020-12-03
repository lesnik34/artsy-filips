import React from 'react'
import './Preview.scss'

export const Preview = (props) => {
    return (
        <div className='preview'>
            <div className='preview__wrapper' />
            <h1 className='preview__title'>{props.name}</h1>

            <div className={`${props.className} preview__image`} />
        </div>
    )
}