import firebase from 'firebase';

const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
