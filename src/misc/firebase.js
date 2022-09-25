import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyD2_NQ5bn4f-0zyFiT84ftLTBxNTY-Cogg',
  authDomain: 'chat-app-87098.firebaseapp.com',
  projectId: 'chat-app-87098',
  storageBucket: 'chat-app-87098.appspot.com',
  messagingSenderId: '728332066707',
  appId: '1:728332066707:web:e3232bfba69228a69d5266',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
