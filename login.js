// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
import {getAuth, signInWithRedirect, getRedirectResult, signOut, onAuthStateChanged, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBuEn5LT4GsW2cLsSvRua2zoVal06P3EzM",
    authDomain: "bmi-monitor-1.firebaseapp.com",
    projectId: "bmi-monitor-1",
    storageBucket: "bmi-monitor-1.appspot.com",
    messagingSenderId: "893411528878",
    appId: "1:893411528878:web:71b7d33f78ed2003ec9d3f",
    measurementId: "G-68Z7RWN8P2"
  }; 

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInBtn = document.getElementById("signinbtn");
const signOutBtn = document.getElementById("signoutbtn");
const userInfo = document.getElementById("userinfo");

signInBtn.addEventListener("click", logIn);
signOutBtn.addEventListener("click", logOut);

function logIn(){
alert("clicked");
  signInWithRedirect(auth, provider);
}
function logOut(){
alert("click");
  signOut(auth).then(()=>{
    //successfully loggedout
alert("signed out")
  }).catch((error)=>{
    //an error occurred
alert("error in signing out")
  });
}


getRedirectResult(auth).then((result)=>{
  //successfully redirected with result
alert("success");
}).catch((error)=>{
  //an error occured
alert("error")
});


onAuthStateChanged(auth, (user)=>{
  if (user){
     setSignedInState(user);
  } else {
    setSignedOutState()
  }
});


function setSignedInState(user){
  signInBtn.style.display = "none";
  signOutBtn.style.display = "static";
  userInfo.innerHTML = user.ui;
}


function setSignedOutState(){
  signInBtn.style.display = "static";
  signOutBtn.style.display = "none";
  userInfo.innerHTML = "null";
}

