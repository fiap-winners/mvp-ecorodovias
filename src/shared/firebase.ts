import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBR4fApaxe7QKGnZPiGUOxDamYJluTyfWY",
  authDomain: "mvp-ecorodivias.firebaseapp.com",
  databaseURL: "https://mvp-ecorodivias.firebaseio.com",
  projectId: "mvp-ecorodivias",
  storageBucket: "mvp-ecorodivias.appspot.com",
  messagingSenderId: "148591671426",
  appId: "1:148591671426:web:93f585c2c4918195525c9b"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
