import { signOut } from "firebase/auth";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, signoutfromGoogle } from "../auth/Firebase";
import { AuthContext } from "../context/AuthContextProvider";

const NavBar = () => {
  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const logout = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
  };

  const handleLogout = (setIsLoggedIn) => {
    logout(setIsLoggedIn);
    signoutfromGoogle(setIsLoggedIn);
    navigate("/");
  };

  return (
    <nav className="navbar bg-primary text-white navbar-expand-lg bg-body-tertiary px-4">
      <div className="d-flex justify-content-between w-100">
        <NavLink className="navbar-brand text-white px-3" to="/">
          React Movie App
        </NavLink>

        <ul className="navbar-nav">
          {/* <NavLink to="#" className="mx-2">
            <button
              onClick={logout}
              className="btn btn-primary btn-outline-light mx-1"
            >
              Logout email
            </button>
          </NavLink> */}
          {isLoggedIn ? (
            <>
              <img
                src={localStorage.getItem("profilePic")}
                alt={localStorage.getItem("name")}
              />
              <p>{localStorage.getItem("name")}</p>
              <NavLink to="#" className="mx-2">
                <button
                  // onClick={() => signoutfromGoogle(setIsLoggedIn)}
                  onClick={() => handleLogout(setIsLoggedIn)}
                  className="btn btn-primary btn-outline-light mx-1"
                >
                  Logout
                </button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login" className="mx-2">
                <button className="btn btn-primary btn-outline-light mx-1">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register" className="mx-2">
                <button className="btn btn-primary btn-outline-light mx-1">
                  Register
                </button>
              </NavLink>
            </>
          )}
          {/* {console.log(localStorage.getItem("islogedIn"))} */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
