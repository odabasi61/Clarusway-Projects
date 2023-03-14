import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";

// createcontext standart olarak yapılır bu şekilde. bu yapı her projede aşağı yukarı aynı şekilde yapılıyor.
export const AuthContext = createContext();

// buradaki children propstur. aşağıda return kısmında value olarak gönderilen her şey children (alt küme elemanlarına) props olarak gider. bu children app.js de approuterın authcontextprovider ile sarmallanmasıyla oldu.
const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const createUser = async (email, password) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (email, password) => {
    //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
    // parantez içindeki auth, axios ile çalışırken yaptığımızda nasıl url alıyorsak, burada da auth var. yanındakiler de parametreler.
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  //logout da try catch e gerek yok. async awaite gerek yok.
  const logOut = () => {
    signOut(auth);
  };

  const values = {
    createUser,
    signIn,
    logOut,
    currentUser: { displayName: "felix franko" },
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
