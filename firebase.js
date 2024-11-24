import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO6a2r1bROHyMaaARVfMj83A_njp0xmEc",
  authDomain: "challenge-4431c.firebaseapp.com",
  projectId: "challenge-4431c",
  storageBucket: "challenge-4431c.appspot.com",
  messagingSenderId: "171708358595",
  appId: "1:171708358595:web:e17aab89b615a60e0f6776",
  measurementId: "G-3HWCQEK7JV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
