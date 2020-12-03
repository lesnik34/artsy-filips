import React from 'react'
import './Contacts.scss'
import {ScrollToTopOnMount} from "../../utils/scroll";

export const Contacts = () => {
    return (
        <main>
            <ScrollToTopOnMount/>

            <section className='contacts'>
                <h1 className='visually-hidden'>Контакты</h1>

                <div className='contacts__wrapper'>
                    <div className='contacts__social-net'>
                        <a href="mailto:lesnyak_2011@mail.ru" className='contacts__link'>
                            <svg className='contacts__social contacts__social--mail' viewBox="0 0 80 80">
                                <path d="M66.5 3H14C7.92487 3 3 7.92487 3 14V66.5C3 72.5751 7.92487 77.5 14 77.5H66.5C72.5751 77.5 77.5 72.5751 77.5 66.5V14C77.5 7.92487 72.5751 3 66.5 3Z" stroke-width="5"/>
                                <path d="M16 19.5797L40.6324 39L66 19" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M68.3946 67.9959L56 28.2448" stroke-width="5" stroke-linecap="round"/>
                                <path d="M12.6054 67.9914L25 28.2402" stroke-width="5" stroke-linecap="round"/>
                            </svg>
                        </a>

                        <a href="https://www.instagram.com/artsy.filips/" className='contacts__link'>
                            <svg className='contacts__social contacts__social--insta' viewBox="0 0 512 512">
                                <path d="m75 512h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45zm0 0"/>
                                <path d="m256 391c74.4375 0 135-60.5625 135-135s-60.5625-135-135-135-135 60.5625-135 135 60.5625 135 135 135zm0-240c57.898438 0 105 47.101562 105 105s-47.101562 105-105 105-105-47.101562-105-105 47.101562-105 105-105zm0 0"/>
                                <path d="m406 151c24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45 20.1875 45 45 45zm0-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="contacts__overlay"/>
            </section>
        </main>
    )
}