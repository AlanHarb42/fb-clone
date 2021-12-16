import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHKrOHTJfKk9whmXKVLoFQqT6tdgx8JZE",
  authDomain: "fb-clone-76e23.firebaseapp.com",
  projectId: "fb-clone-76e23",
  storageBucket: "fb-clone-76e23.appspot.com",
  messagingSenderId: "324164120398",
  appId: "1:324164120398:web:35e65d0aa2e96b01d5781f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
