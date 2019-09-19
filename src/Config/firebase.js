import firebase from 'firebase/app'
import 'firebase/database'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCFKaJj-RQkG3oTlIa_231-lId2PpCYFmw",
    authDomain: "redux-todo-4cbbe.firebaseapp.com",
    databaseURL: "https://redux-todo-4cbbe.firebaseio.com",
    projectId: "redux-todo-4cbbe",
    storageBucket: "",
    messagingSenderId: "846128795188",
    appId: "1:846128795188:web:12af0938198bec6e690461"
  };
  // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);

 export {
     firebaseApp
 }