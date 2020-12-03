import React, {useEffect, useState,} from 'react'
import './WorksSlider.scss'
import AliceCarousel from 'react-alice-carousel'
import {WorksSlide} from "../WorksSlide/WorksSlide";
import {dataBase} from "../../firebase/firebase";
import {Loader} from "../Loader/Loader";

export const WorksSlider = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
            dataBase
                .ref('catalog')
                .once('value')
                .then((snapshot) => {
                    setData(snapshot.val())
                })
        }
    , [])

    const getSliderItems = (data) => data.map((element, index) =>
        <WorksSlide
            key={index}
            name={element.name}
            size={element.size}
            description={element.description}
            category={element.category}
            url={element.url}
        />
    )

    const getRandomData = (data) => {
        const newData = [];
        const keys = Object.keys(data);

        for (let i = 0; i < keys.length; i++) {
            const localKeys = Object.keys(data[keys[i]]);
            const randElem = Math.floor(Math.random() * (localKeys.length));

            newData.push(data[keys[i]][Object.keys(data[keys[i]])[randElem]])
        }

        return newData
    }

    return (
        <AliceCarousel
            dotsDisabled={true}
            autoPlay={false}
            infinite={true}
            autoPlayInterval={3000}
            autoPlayActionDisabled={true}
        >
            { data ? getSliderItems(getRandomData(data)) : <Loader /> }
        </AliceCarousel>
    )
}