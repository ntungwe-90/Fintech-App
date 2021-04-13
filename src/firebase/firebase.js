import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzM6cLCLNaz7M8PiTe7vPNLVv9BIUHBwg",
  authDomain: "buisness-point.firebaseapp.com",
  projectId: "buisness-point",
  storageBucket: "buisness-point.appspot.com",
  messagingSenderId: "438927093250",
  appId: "1:438927093250:web:c7d5c1750df1c43e24c11b"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
