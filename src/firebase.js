// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSJl5YPpYhMkpxnXJg_SK7tkFIL6bGGPQ",
  authDomain: "todo-app-v2-19849.firebaseapp.com",
  databaseURL: "https://todo-app-v2-19849.firebaseio.com",
  projectId: "todo-app-v2-19849",
  storageBucket: "todo-app-v2-19849.appspot.com",
  messagingSenderId: "704151228282",
  appId: "1:704151228282:web:f2c9f635b9ea6c6c8a90c3",
  measurementId: "G-B0B94ECYSP",
});

const db = firebaseApp.firestore();
export default db;
