import * as firebase from 'firebase'
import '@firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBq4Yg-loHrKyNOP7s9eOt7jj-J9SIokWw",
    authDomain: "expense-tracker-app-135ed.firebaseapp.com",
    projectId: "expense-tracker-app-135ed",
    storageBucket: "expense-tracker-app-135ed.appspot.com",
    messagingSenderId: "197078423133",
    appId: "1:197078423133:web:5100d1dc9fc0a9d0765fb4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}