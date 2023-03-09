import { Link } from "react-router-dom";
import logo from "../assets/images/clarusway_logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-600 flex flex-col justify-center items-center gap-10 py-6 text-white text-lg">
      <p>Clarusway Web Design, Copyright &copy; {new Date().getFullYear()}</p>
      <Link to={"https://clarusway.com/"} target="_blank">
        <img src={logo} alt="clarusway logo" />
      </Link>
    </div>
  );
};

export default Footer;
