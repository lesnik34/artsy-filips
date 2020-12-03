import React, {useContext} from 'react'
import './LangToggle.scss'
import {LangContext} from "../../context/lang/langContext";

export const LangToggle = () => {
    const {setRu, setEn, lang} = useContext(LangContext)

    return (
        <div className='lang-toggle'>
            <button
                className={'lang-toggle--button ' + (lang.lang === 'en' ? 'lang-toggle--active' : '')}
                onClick={setEn}
            >
                En
            </button>

            <span className='lang-toggle--span'>/</span>

            <button
                className={'lang-toggle--button ' + (lang.lang === 'ru' ? 'lang-toggle--active' : '')}
                onClick={setRu}
            >
                Ru
            </button>
        </div>
    )
}