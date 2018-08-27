import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCuwER2BM7lgF_ingrUisbt6b1GWKVCsc8",
    authDomain: "mojila-online-test.firebaseapp.com",
    databaseURL: "https://mojila-online-test.firebaseio.com",
    projectId: "mojila-online-test",
    storageBucket: "",
    messagingSenderId: "107136360802"
};

const auth = !firebase.apps.length
    ? firebase.initializeApp(config).auth()
    : firebase.app().auth()
const database = !firebase.apps.length
    ? firebase.initializeApp(config).database()
    : firebase.app().database()

export { auth, database }