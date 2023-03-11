import { useContext, useState } from "react";
import { auth } from "../auth/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // const [user, setUser] = useState({});
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      className="modal-dialog modal-dialog-centered w-50 my-5"
      role="document"
    >
      <form
        // onSubmit={(e) => handleSubmit(e)}
        className="modal-content"
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">
            Login
          </h5>
        </div>
        <div className="modal-body d-flex flex-column gap-2">
          <label htmlFor="email">Email</label>
          <input
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
            type="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={(event) => {
              setRegisterPassword(event.target.value);
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
            onClick={(e) => register(e)}
            type="submit"
            className="btn btn-primary"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
