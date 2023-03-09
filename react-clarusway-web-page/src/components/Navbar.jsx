import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex flex-col sm:flex-row text-center gap-3 justify-between items-center p-8 bg-gray-600 border-b-4 border-purple-500">
      <Link to={"/"}>
        <h1 className="text-purple-500 text-2xl font-bold">
          Clarusway Web Design
        </h1>
      </Link>
      <nav>
        <ul className="flex gap-3 text-white">
          <li className="hover:text-purple-500 duration-300">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="hover:text-purple-500 duration-300">
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li className="hover:text-purple-500 duration-300">
            <NavLink to="/services">SERVICES</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
