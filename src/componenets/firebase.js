import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDY2_xbeTTto__wMYGqQM9xD6YUHEdtZLM",
    authDomain: "facebook-clone-07-69ad4.firebaseapp.com",
    projectId: "facebook-clone-07-69ad4",
    storageBucket: "facebook-clone-07-69ad4.appspot.com",
    messagingSenderId: "744974678373",
    appId: "1:744974678373:web:ab1f6630f47228ae4e098c",
    measurementId: "G-9DWWKZZN2S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db; 