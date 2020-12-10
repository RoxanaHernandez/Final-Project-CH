import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({

    apiKey: "AIzaSyBFEup-cvu636FVHlHJUpBEouyp4C7NKA4",
    authDomain: "e-commercecoder.firebaseapp.com",
    databaseURL: "https://e-commercecoder.firebaseio.com",
    projectId: "e-commercecoder",
    storageBucket: "e-commercecoder.appspot.com",
    messagingSenderId: "591443449083",
    appId: "1:591443449083:web:367b3c878b5a34113f8c5e"


});

export function getFirebase(){
    return app;
};

export function getFirestore(){
    return firebase.firestore(app);
};
 
