// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

import { getDatabase, ref, set, child, get, query, onValue } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyCY1cKgkaMxuW7yeXI1PPntRiumSt-eLoo",
  authDomain: "e-commerce-96c1f.firebaseapp.com",
  databaseURL: "https://e-commerce-96c1f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "e-commerce-96c1f",
  storageBucket: "e-commerce-96c1f.appspot.com",
  messagingSenderId: "845881556150",
  appId: "1:845881556150:web:237c699ba63689fe547a17",
  measurementId: "G-RGQBDHDW3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

const auth = getAuth();

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

//It allows the user to specify the google account to use for login//
provider.setCustomParameters({
  prompt: "select_account",
});

export const signinWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    // console.log(credential)
    // console.log(result.user.email)
    window.location.href = 'home.html'
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  export function AddUser(username, email, firstName, lastName, password, confirmPassword, securityQuestion, securityAnswer, cellphoneNumber) {
    set(ref(db, 'users/' + username), {
      email: email,
      firstname: firstName,
      lastname: lastName,
      cellphonenumber: cellphoneNumber,
      password: password,
      confirmpassword: confirmPassword,
      securityquestion: securityQuestion,
      securityanswer: securityAnswer,
      
      
    }).catch;
    
  }
  
  export function AuthenticateUser(username, password) {
    return new Promise((resolve, reject) => {
      onValue(ref(db, '/users/' + username), (snapshot) => {
        try {
          if(password === snapshot.val()?.password) {
            resolve(true)      
          } else {
            resolve(false)
          }
          
        } catch (error) {
          reject(false)    
        }
        
       
       
      }, {
        onlyOnce: true
      });
      
    })
  }