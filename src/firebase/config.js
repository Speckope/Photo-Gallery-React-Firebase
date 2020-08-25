import * as firebase from 'firebase';
// storage is for storing images
import 'firebase/storage';
// firestore is the database
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyArVLQoOEqQ6pXGtSY7XES6eMolPGIcRZs',
  authDomain: 'instant-fire-reaction.firebaseapp.com',
  databaseURL: 'https://instant-fire-reaction.firebaseio.com',
  projectId: 'instant-fire-reaction',
  storageBucket: 'instant-fire-reaction.appspot.com',
  messagingSenderId: '828848717205',
  appId: '1:828848717205:web:ccbdd28d63474767288a9c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// This starts our storage service
// When we interact with storage on the backend we now use this const
const projectStorage = firebase.storage();
// This is same as above but database
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
