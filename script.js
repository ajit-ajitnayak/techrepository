//import firebase from 'firebase/app';
//import 'firebase/auth'; // Import other Firebase services as needed


// Replace with your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyMxKeOsBDwkxnVzj2sQQPtj_1C2ejYD8",
  authDomain: "dandika-a3626.firebaseapp.com",
  projectId: "dandika-a3626",
  storageBucket: "dandika-a3626.appspot.com",
  messagingSenderId: "39248739498",
  appId: "1:39248739498:web:f8cb9aa1aa2b88044ca4d3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function sendOTP() {
  const phoneNumber = document.getElementById('phoneNumber').value;

  // Initialize reCAPTCHA verifier
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA verified successfully
    }
  });

  firebase.auth().signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
    .then(confirmationResult => {
      // SMS code sent; proceed to next step
      window.confirmationResult = confirmationResult;
      // Display a prompt or input field for the user to enter the code
      alert('Verification code sent. Please enter the code.');
    })
    .catch(error => {
      // Handle error
      console.error('Error sending verification code:', error);
      alert('Error sending verification code. Please try again.');
    });
}