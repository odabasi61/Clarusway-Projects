import { createContext, useState } from "react";

// bu oluşturduğumuz authcontext sayesinde stateleri istediğimiz componente taşıyabiliriz. aşağıda provider sarmalına sarıp childrena (yani tüm alt kümelere) value olarak gönderiyoruz. alacağımız yerde authcontext import etmemiz lazım.
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  // stateleri topluca gönderiyoruz contextprovider ile.
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
