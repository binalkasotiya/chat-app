import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyDQ4oabFE0IrbmiCcX2lY95XEU8PUE2v4s',
  authDomain: 'chat-web-app-99a18.firebaseapp.com',
  projectId: 'chat-web-app-99a18',
  storageBucket: 'chat-web-app-99a18.appspot.com',
  messagingSenderId: '224947738431',
  appId: '1:224947738431:web:96667119bf30707e0de58a',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
