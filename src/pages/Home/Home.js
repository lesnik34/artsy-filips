import React from 'react'
import './Home.scss'
import {About} from "../../components/About/About";
import {Promo} from "../../components/Promo/Promo";
import {Works} from "../../components/Works/Works";
import {ScrollToTopOnMount} from "../../utils/scroll";

export const Home = () => {
    return (
        <main className='parallax__group'>
            <ScrollToTopOnMount />

            <Promo />
            <About />
            <Works />
        </main>
    )
}