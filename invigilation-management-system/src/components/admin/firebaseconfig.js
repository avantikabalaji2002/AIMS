import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  // Your Firebase project configuration
    apiKey: "AIzaSyDJOxesiWvZ5z1CQr-W_cCWf45OKDH6MEo",
    authDomain: "ab-firebase-ddf74.firebaseapp.com",
    databaseURL: "https://ab-firebase-ddf74-default-rtdb.firebaseio.com",
    projectId: "ab-firebase-ddf74",
    storageBucket: "ab-firebase-ddf74.appspot.com",
    messagingSenderId: "70005192173",
    appId: "1:70005192173:web:6b5e84b2fc506d765f63e4"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
