// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage} from "firebase/storage";
// import App from "./App";

// const firebaseConfig = {
//   apiKey: "AIzaSyDJOxesiWvZ5z1CQr-W_cCWf45OKDH6MEo",
//   authDomain: "ab-firebase-ddf74.firebaseapp.com",
//   projectId: "ab-firebase-ddf74",
//   storageBucket: "ab-firebase-ddf74.appspot.com",
//   messagingSenderId: "70005192173",
//   appId: "1:70005192173:web:6b5e84b2fc506d765f63e4"
// };


// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const storage = getStorage(app);
// export { app, auth, storage as default };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDJOxesiWvZ5z1CQr-W_cCWf45OKDH6MEo",
  authDomain: "ab-firebase-ddf74.firebaseapp.com",
  databaseURL: "https://ab-firebase-ddf74-default-rtdb.firebaseio.com",
  projectId: "ab-firebase-ddf74",
  storageBucket: "ab-firebase-ddf74.appspot.com",
  messagingSenderId: "70005192173",
  appId: "1:70005192173:web:6b5e84b2fc506d765f63e4"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Firebase Authentication
const auth = getAuth();
export {auth};

// Firebase Storage - Upload, download, delete files
export const storage = getStorage(app);

//export default firebase; (want to try displaying table from RT DB)

// Adding faculty details
const db=firebase.initializeApp(firebaseConfig);
export default db.database().ref();
