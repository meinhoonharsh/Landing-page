import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB3J7upzs8W8E9wJOyFvIBe43oRQPBTECY",
  authDomain: "brickstox-eb325.firebaseapp.com",
  databaseURL: "https://brickstox-eb325-default-rtdb.firebaseio.com",
  projectId: "brickstox-eb325",
  storageBucket: "brickstox-eb325.appspot.com",
  messagingSenderId: "810207961196",
  appId: "1:810207961196:web:cfef40d90bfe42f69bf849",
  measurementId: "G-PQE5508LJC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;

