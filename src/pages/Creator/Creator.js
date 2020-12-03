import React, {useState} from 'react'
import './Creator.scss'
import {dataBase, storage} from "../../firebase/firebase";
import {ScrollToTopOnMount} from "../../utils/scroll";
import {Popup} from "../../components/Popup/Popup";

export const Creator = () => {
    const [file, setFile] = useState(null);

    const [message, setMessage] = useState(null);

    const postData = (e, url) => {
        const data = {
            name: e.target[0].value,
            description: e.target[1].value,
            size: e.target[2].value,
            category: e.target[3].value,
            url: url
        }
        let name = e.target[0].value;

        dataBase.ref(`catalog/${e.target[3].value}/${name.trim().replace(/\s/g, '-')}`)
            .set(data)
            .then(r => {
                setMessage({
                    title: 'Success',
                    text: 'Данные успешно сохранены',
                    type: 'success'
                });
            })
            .catch(error => {
                setMessage({
                    title: error.name,
                    text: error.message,
                    type: 'error'
                });
            })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        let name = e.target[0].value;
        Object.defineProperty(file, 'name', {
            writable: true,
            value: `${name.trim().replace(/\s/g, '-')}.jpg`
        });

        const uploadTask = storage.ref(`${e.target[3].value}/${file.name}`).put(file);

        uploadTask.on(
            'state_changed',
            snapshot => {},
            error => {
                setMessage({
                    title: error.name,
                    text: error.message,
                    type: 'error'
                });
            },
            () => {
                storage
                    .ref(e.target[3].value)
                    .child(file.name)
                    .getDownloadURL()
                    .then(url => {
                        postData(e, url)
                    })
            }
        )
    }

    return (
        <main>
            <ScrollToTopOnMount />

            {
                message
                    ? <Popup
                        title={message.title}
                        text={message.text}
                        type={message.type}
                        resetMessage={() => setMessage(null)} />
                    : null
            }

            <section className='creator'>
                <div className="container">
                    <div className='creator__wrapper'>
                        <form className='creator__form' onSubmit={submitHandler}>
                            <div className='creator__item'>
                                <label className='creator__label' htmlFor="art_name">Название</label>
                                <input className='creator__input' type="text" id='art_name' name='name' required/>
                            </div>

                            <div className='creator__item'>
                                <label className='creator__label' htmlFor="art_description">Описание</label>
                                <input className='creator__input' type="text" id='art_description' name='description' required/>
                            </div>

                            <div className='creator__item'>
                                <label className='creator__label' htmlFor="art_description">Размер</label>
                                <input className='creator__input' type="text" id='art_size' name='size' required/>
                            </div>

                            <div className='creator__item'>
                                <label className='creator__label' htmlFor="art_category">Категория</label>
                                <select className='creator__category' name="category" id="art_category">
                                    <option value="paintings">paintings</option>
                                    <option value="works">works on paper</option>
                                    <option value="paper">paper</option>
                                </select>
                            </div>
                            
                            <div className='creator__item'>
                                <input className='creator__file' type="file" accept='.jpg' required onChange={e => {if (e.target.files[0]) {setFile(e.target.files[0])}}}/>
                            </div>

                            <button className='creator__submit'>Сохранить</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}