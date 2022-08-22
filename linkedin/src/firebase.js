import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDCwYqb-CswxEqz5DDGjQ-t77kPlCHHeGM",
    authDomain: "linkedin-5199d.firebaseapp.com",
    projectId: "linkedin-5199d",
    storageBucket: "linkedin-5199d.appspot.com",
    messagingSenderId: "964357315535",
    appId: "1:964357315535:web:590a8646e56b6ed72690ba"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;