import * as firebase from "firebase";

let initFirebase
const firebaseConfig = {
  apiKey: "AIzaSyAz3ob1g71YpMryJQd0MxaX5CbEVpVAFuM",
  authDomain: "todo-list-129c4.firebaseapp.com",
  databaseURL: "https://todo-list-129c4.firebaseio.com",
  storageBucket: "todo-list-129c4.appspot.com"
};
// Initialize Firebase
const getClient = () => {
  if (!initFirebase) {
    initFirebase = firebase.initializeApp(firebaseConfig);
  }
  return { initFirebase, firebase };
};

export default getClient;
