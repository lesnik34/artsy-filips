import React from 'react'
import './Warning.scss'
import {dataBase, storage} from "../../firebase/firebase";

export const Warning = (props) => {
    const deleteHandler = () => {
        dataBase
            .ref(`catalog/${props.alert.section}/${props.alert.name}`)
            .remove().then(r => {
                storage
                    .ref()
                    .child(`${props.alert.section}/${props.alert.name}.jpg`)
                    .delete()
                    .then(function() {
                        // File deleted successfully
                    })
                    .catch(function(error) {
                    console.log(error)
                    });

                dataBase
                    .ref('catalog')
                    .once('value')
                    .then((snapshot) => {
                        props.setData(snapshot.val())
                        props.setAlert(null)
                    });
            })
    }

    return (
        <div className='warning'>
            <h2 className='warning__title'>Delete?</h2>

            <div className='warning__wrapper'>
                <button className='warning__btn warning__btn--yes' onClick={deleteHandler}>yes</button>
                <button className='warning__btn warning__btn--no' onClick={() => props.setAlert(null)}>no</button>
            </div>
        </div>
    )
}