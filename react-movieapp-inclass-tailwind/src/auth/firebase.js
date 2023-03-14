import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWqQm2ft2HSFRDBpE5LOrqLOWrnlPnpPg",
  authDomain: "movieinclass.firebaseapp.com",
  projectId: "movieinclass",
  storageBucket: "movieinclass.appspot.com",
  messagingSenderId: "902335745220",
  appId: "1:902335745220:web:26d9f727eca4edb57ecd91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// bu sayfa standart olarak yapılır. burada auth import ve export edilir. authorization gerekli yerler için kullanacağız. authcontexte göndereceğiz.
