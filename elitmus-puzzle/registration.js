// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../firebaseConfig";
firebase.initializeApp(firebaseConfig);
const firebaseConfig = {
  apiKey: "AIzaSyBU-JlE5gJ43fq1sQ1ZaQUszV4aV5YE_Ek",
  authDomain: "elitmus-project1.firebaseapp.com",
  projectId: "elitmus-project1",
  storageBucket: "elitmus-project1.appspot.com",
  messagingSenderId: "721522821149",
  appId: "1:721522821149:web:daeea71fc30a33dddc9ef4",
  measurementId: "G-K6H86P1D9W"
};

firebase.initializeApp(firebaseConfig);
// Get elements
var email = document.getElementById('email');
var passwoSrd = document.getElementById('password');
var confirmPassword = document.getElementById('confirm-password');
var signUpBtn = document.getElementById('signup');

// Add sign up event
if (signUpBtn) {
  signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const userEmail = email.value;
    const userPassword = password.value;
    const userConfirmPassword = confirmPassword.value;

    if (userPassword !== userConfirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Sign up user with Firebase authentication
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
      .then((userCredential) => {
        // User is signed up
        console.log('User signed up:', userCredential);
        window.location.replace('level2.html');
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Sign up error:', errorCode, errorMessage);
        alert(errorMessage);
      });
  });
}