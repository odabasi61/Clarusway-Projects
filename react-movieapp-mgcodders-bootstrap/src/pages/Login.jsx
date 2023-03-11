import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../auth/Firebase";
import { AuthContext } from "../context/AuthContextProvider";
import { auth } from "../auth/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user.user.email);
      localStorage.setItem("name",user.user.email);
    localStorage.setItem("profilePic","https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png");
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  // const handlegoogleLogin = async () =>{
  //   const xyz = await signInWithGoogle(setIsLoggedIn);
  //   navigate("/movies")
  // }

  return (
    <div className="login-page">
      <div className="modal-container">
        {/* continue with google */}
        <button
          // onClick={handlegoogleLogin}
          onClick={() =>  signInWithGoogle(setIsLoggedIn)}
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
        >
          Continue with Google
        </button>
        {/* Button trigger for email */}
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Continue with Email
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <form 
            onSubmit={(e) => handleSubmit(e)}
             className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Login
                </h5>
              </div>
              <div className="modal-body d-flex flex-column gap-2">
                <label htmlFor="email">Email</label>
                <input
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                  type="email"
                  id="email"
                />
                <label htmlFor="password">Password</label>
                <input
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                  type="password"
                  id="password"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={login}
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
