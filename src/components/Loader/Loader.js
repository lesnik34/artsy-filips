import React from 'react'
import './Loader.scss'

export const Loader = () =>
    <div className='loader'>
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>