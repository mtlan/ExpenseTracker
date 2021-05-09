import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBq4Yg-loHrKyNOP7s9eOt7jj-J9SIokWw",
  authDomain: "expense-tracker-app-135ed.firebaseapp.com",
  databaseURL: "https://expense-tracker-app-135ed-default-rtdb.firebaseio.com",
  projectId: "expense-tracker-app-135ed",
  storageBucket: "expense-tracker-app-135ed.appspot.com",
  messagingSenderId: "197078423133",
  appId: "1:197078423133:web:5100d1dc9fc0a9d0765fb4",
  measurementId: "G-CFDVPZ5EYE",
};
// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }

const Fire = firebase.initializeApp(config);
export default Fire;

