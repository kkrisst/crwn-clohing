import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAVtScbBPbDir4OVF-taSM6W5s-2QN-kis",
  authDomain: "crown-db-cb8ac.firebaseapp.com",
  databaseURL: "https://crown-db-cb8ac.firebaseio.com",
  projectId: "crown-db-cb8ac",
  storageBucket: "",
  messagingSenderId: "30104457188",
  appId: "1:30104457188:web:a580267b726c08c0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
