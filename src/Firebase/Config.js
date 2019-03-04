import firebase from 'firebase/app';

var config = {
    apiKey: "AIzaSyCpv9kGM8MgZRn1PVs0-eKe7JMt-9KYC-I",
    authDomain: "tech-fest-dc6c6.firebaseapp.com",
    databaseURL: "https://tech-fest-dc6c6.firebaseio.com",
    projectId: "tech-fest-dc6c6",
    storageBucket: "tech-fest-dc6c6.appspot.com",
    messagingSenderId: "487929242537"
  };
  const db = firebase.initializeApp(config);

  export default db;