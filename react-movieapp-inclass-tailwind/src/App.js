import React from "react";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";

//appRouterı authcontextprovider ile sarmalladık. bu sayede children props yapılabiliyor. yani approuter burada children oluyor. authcontext içerisinde de onu karşılıyoruz.

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
};

export default App;
