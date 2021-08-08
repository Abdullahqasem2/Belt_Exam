import firebase from 'firebase'
var firebaseConfig = {

    apiKey: "AIzaSyAKGlf0C_cl5ulFzRisXQbRevKcmL9E9Xo",

    authDomain: "shurikin-58d26.firebaseapp.com",

    projectId: "shurikin-58d26",

    storageBucket: "shurikin-58d26.appspot.com",

    messagingSenderId: "583108642034",

    appId: "1:583108642034:web:44da0d20a125fd5322fc6b"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
