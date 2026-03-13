const firebaseConfig = {
  apiKey: "AIzaSyCxhYQ86-Ef9eZLlzjxNAlskkHXEoQGZKM",
  authDomain: "bodyfactorygym-af5bb.firebaseapp.com",
  databaseURL: "https://bodyfactorygym-af5bb-default-rtdb.firebaseio.com",
  projectId: "bodyfactorygym-af5bb",
  storageBucket: "bodyfactorygym-af5bb.firebasestorage.app",
  messagingSenderId: "639117170095",
  appId: "1:639117170095:web:ea4100db7abeffb12ccb5a"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();   // ✅ correct

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
