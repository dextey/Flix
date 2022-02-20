import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBlpHR8KGtMJE1vdFrSN1aZYdFXR-gtn-w",
    authDomain: "flix-e27ca.firebaseapp.com",
    projectId: "flix-e27ca",
    storageBucket: "flix-e27ca.appspot.com",
    messagingSenderId: "345844533997",
    appId: "1:345844533997:web:bca7181390cfd0f9155ae4",
    measurementId: "G-F3KQTVFQHW"
  };

  export const Firebase = firebase.initializeApp(firebaseConfig)