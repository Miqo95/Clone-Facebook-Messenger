import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDppglaRq96SmL6zO-CX9V31u10lwpj9DA",
    authDomain: "unichat-4c8e8.firebaseapp.com",
    projectId: "unichat-4c8e8",
    storageBucket: "unichat-4c8e8.appspot.com",
    messagingSenderId: "456565803126",
    appId: "1:456565803126:web:6241dabaa436728a42f757",
  })
  .auth();
