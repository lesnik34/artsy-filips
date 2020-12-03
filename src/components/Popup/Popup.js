import React from 'react'
import './Popup.scss'

export const Popup = (props) => {
    return (
        <div className={'popup popup--' + props.type}>
            <div className='popup__btn--close' onClick={props.resetMessage}>
                <div className='popup__line popup__line--first'></div>

                <div className='popup__line popup__line--second'></div>
            </div>

            <div className='popup__message'>
                <h2 className='popup__title'>{ props.title }</h2>

                <p className='popup__text'>{ props.text }</p>
            </div>
        </div>
    )
}