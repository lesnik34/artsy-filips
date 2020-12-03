import React, {useEffect, useState} from 'react'
import './Delete.scss'
import {dataBase} from "../../firebase/firebase";
import {Loader} from "../../components/Loader/Loader";
import {Warning} from "../../components/Warning/Warning";


export const Delete = () => {
    const [data, setData] = useState(null);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        dataBase
            .ref('catalog')
            .once('value')
            .then((snapshot) => {
                setData(snapshot.val())
            })
    }, [])

    const getHeaders = () => {
        const dataKeys = Object.keys(data)

        return dataKeys.map((element, index) => (
            <li className='delete__item' key={index}>
                <h2 className='delete__header'>{ element }</h2>

                <ul className='delete__sub-list'>
                    {
                        Object.keys(data[element]).map((item, i) => (
                            <li key={i} className='delete__sub-item'>
                                <h3 className='delete__sub-header'>{ item }</h3>

                                <button
                                    className='delete__btn'
                                    onClick={() => setAlert({
                                        section: element,
                                        name: item
                                    })}
                                >Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </li>
        ))
    }

    return (
        <main>
            <section className='delete'>
                <div className='container'>
                    {
                        alert
                            ? <Warning setAlert={setAlert} alert={alert} setData={setData} />
                            : null
                    }

                    <div className='delete__wrapper'>
                        <ul className='delete__list'>
                            {
                                data
                                    ? getHeaders()
                                    : <Loader />
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}