import { initializeApp } from "firebase/app";
import {getFireStore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB3fBjrQr3jPZ2NvwCxoARb7_ScR7bK6WI",
    authDomain: "fir-react-3945e.firebaseapp.com",
    projectId: "fir-react-3945e",
    storageBucket: "fir-react-3945e.appspot.com",
    messagingSenderId: "801064349197",
    appId: "1:801064349197:web:9648dc3cc44e6721cfef44",
    measurementId: "G-CLELW7TC17"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFireStore(app);
