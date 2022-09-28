import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyB7v2mkR_3GZLTYX2Qv5bWviI6wQzLcNGg',
  authDomain: 'chit-chat-2cd46.firebaseapp.com',
  databaseURL: 'https://chit-chat-2cd46-default-rtdb.firebaseio.com',
  projectId: 'chit-chat-2cd46',
  storageBucket: 'chit-chat-2cd46.appspot.com',
  messagingSenderId: '155555235338',
  appId: '1:155555235338:web:c35f7a0e8272d5b02a01f3',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
