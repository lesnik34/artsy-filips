import React, {useEffect, useState} from 'react'
import './Gallery.scss'
import {Preview} from '../../components/Preview/Preview'
import {Route, useLocation} from 'react-router-dom'
import {dataBase} from "../../firebase/firebase";
import {ScrollToTopOnMount} from "../../utils/scroll";
import {Loader} from "../../components/Loader/Loader";

export const Gallery = () => {
    const location = useLocation();

    const [data, setData] = useState(null);

    const getCatalogItem = (data) => {
        const currentData = Object.values(data[location.pathname.replace('/', '')]);
        return currentData.map((element, index) => (
            <li className='gallery__item' key={index}>
                <img
                    className='gallery__image'
                    src={element.url}
                    alt={element.name}
                    key={index}
                    onClick={evt => evt.target.classList.toggle('gallery__image--active')}
                />

                <div className='gallery__hidden-wrap'>
                    <h2 className='gallery__hidden-name'>{element.name}</h2>
                    <span className='gallery__hidden-size'>{element.size}</span>
                    <p className='gallery__hidden-desc'>{element.description}</p>
                </div>
            </li>
        ))
    }

    useEffect(() => {
            dataBase
                .ref('catalog')
                .once('value')
                .then((snapshot) => {
                    setData(snapshot.val())
                })
        }, [])

    return (
        <main>
            <ScrollToTopOnMount />

            <section className='gallery'>
                <Route
                    path='/paintings'
                    render={() =>
                        <Preview className='gallery__img gallery__img--paintings' name='paintings' />
                    }
                />

                <Route
                    path='/works'
                    render={() =>
                        <Preview className='gallery__img gallery__img--works' name='works on paper' />
                    }
                />

                <Route
                    path='/paper'
                    render={() =>
                        <Preview className='gallery__img gallery__img--paper' name='paper' />
                    }
                />


                <div className="container">
                    <div className="gallery__wrapper">
                        <ul className='gallery__list'>
                            { data ? getCatalogItem(data) : <Loader /> }
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}