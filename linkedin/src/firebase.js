import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDCwYqb-CswxEqz5DDGjQ-t77kPlCHHeGM",
  authDomain: "linkedin-5199d.firebaseapp.com",
  projectId: "linkedin-5199d",
  storageBucket: "linkedin-5199d.appspot.com",
  messagingSenderId: "964357315535",
  appId: "1:964357315535:web:590a8646e56b6ed72690ba",
};

// Initialize Firebase
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
//const storage = firebase.storage();

export { auth, provider, db };
  export default db;