import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAEStqQ9YxR0XVdzP6dGVKc9TOorp0vP98",
    authDomain: "selfiebooth-72.firebaseapp.com",
    databaseURL: "https://selfiebooth-72.firebaseio.com",
    projectId: "selfiebooth-72",
    storageBucket: "selfiebooth-72.appspot.com",
    messagingSenderId: "1095994945418"
  };
export const fire = firebase.initializeApp(config);