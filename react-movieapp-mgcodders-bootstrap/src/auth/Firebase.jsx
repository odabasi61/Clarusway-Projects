import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1WfMK8_y-5DaH8xcw7xL0DeaRlSX1J8Q",
  authDomain: "movieapp-7a89e.firebaseapp.com",
  projectId: "movieapp-7a89e",
  storageBucket: "movieapp-7a89e.appspot.com",
  messagingSenderId: "2782883305",
  appId: "1:2782883305:web:04357c4f3230e54d22ef78",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = (setIsLoggedIn, setUser) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);

      const name = result.user.displayName;
      const islogedIn = result.user.emailVerified;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("islogedIn", islogedIn);
      localStorage.setItem("profilePic", profilePic);
      setIsLoggedIn(true);
      // setUser(result.user)
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signoutfromGoogle = (setIsLoggedIn, setUser) => {
  signOut(auth)
    .then((result) => {
      localStorage.setItem("islogedIn", false);
      localStorage.setItem("name", "");
      localStorage.setItem("profilePic", "");

      setIsLoggedIn(false);
    })
    .catch((error) => {});
};
