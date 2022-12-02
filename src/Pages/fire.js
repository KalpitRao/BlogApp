import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCMpXVL4LIh65B6q8zBUgjiQqhDLq8G15c",
    authDomain: "blog-app-login.firebaseapp.com",
    projectId: "blog-app-login",
    storageBucket: "blog-app-login.appspot.com",
    messagingSenderId: "789582315935",
    appId: "1:789582315935:web:c69dfa497fdbe327383daa"
  };
const fire = firebase.initializeApp(firebaseConfig);   
export default fire;
