import React, {useContext} from 'react'
import './About.scss'
import {LangToggle} from "../LangToggle/LangToggle"
import {LangContext} from "../../context/lang/langContext"
import {NavLink} from "react-router-dom"

export const About = () => {

    const {lang} = useContext(LangContext)

    const aboutText = {
        ru: (
            <p className='about__text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Est quis elementum, eu est platea dui. Nunc justo, sapien
                rhoncus sed mauris, tortor gravida. Arcu, mattis tincidunt
                neque, volutpat risus mauris. Sit id aliquet bibendum
                feugiat metus pulvinar nunc pulvinar. Venenatis et vivamus
                in vitae malesuada id mauris, eu. Viverra platea faucibus
                ultrices leo euismod et. Mi, arcu in accumsan, tincidunt.
                Molestie amet libero eget diam. Nisi felis sed cursus nisl
                lectus non elit fringilla adipiscing quis.
            </p>
        ),
        en: (
            <p className='about__text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Est quis elementum, eu est platea dui. Nunc justo, sapien
                rhoncus sed mauris, tortor gravida. Arcu, mattis tincidunt
                neque, volutpat risus mauris. Sit id aliquet bibendum
                feugiat metus pulvinar nunc pulvinar. Venenatis et vivamus
                in vitae malesuada id mauris, eu. Viverra platea faucibus
                ultrices leo euismod et. Mi, arcu in accumsan, tincidunt.
                Molestie amet libero eget diam. Nisi felis sed cursus nisl
                lectus non elit fringilla adipiscing quis.
            </p>
        )
    }

    return (
        <section className='about parallax__group'>
            <div className="container parallax__group">
                <div className="about__wrapper" id='about__wrapper'>
                    <h2 className='about__title'>about me</h2>

                    <div className='about__photo'></div>

                    <div className='about__toggle'>
                        <LangToggle />
                    </div>

                    { aboutText[lang.lang] }

                    <NavLink to="/about" className='about__link'>see more</NavLink>
                </div>

                <div className='about__img parallax__element' />
            </div>
        </section>
    )
}