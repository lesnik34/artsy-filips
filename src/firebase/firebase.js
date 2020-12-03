import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBIrwEKDazuIFAl5kaOtAmuu4VfrXnJLLo",
    authDomain: "artsy-filips.firebaseapp.com",
    databaseURL: "https://artsy-filips.firebaseio.com",
    projectId: "artsy-filips",
    storageBucket: "artsy-filips.appspot.com",
    messagingSenderId: "1032286245633",
    appId: "1:1032286245633:web:1cc1fdc7517238fce10100",
    measurementId: "G-886BSMXC33"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const dataBase = firebase.database();

export {storage, dataBase, firebase as default}
