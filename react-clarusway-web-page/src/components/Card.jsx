import html from "../assets/images/logo_html.png";
import css from "../assets/images/logo_css.png";
import graphic from "../assets/images/logo_brush.png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="text-center flex flex-col gap-4 sm:flex-row px-4">
      <div className="card py-8 text-center w-full sm:w-1/3">
        <Link to={"/html"}>
          <img src={html} alt="html" className="m-auto w-[150px]" />
        </Link>
        <h3 className="font-bold py-2">HTML5 Markup</h3>
        <p>
          HTML, or Hypertext Markup Language, is a markup language used to
          create and structure content for the web.
        </p>
      </div>

      <div className="card py-8 text-center w-full sm:w-1/3">
        <Link to={"/css"}>
          <img src={css} alt="css" className="m-auto w-[150px]" />
        </Link>
        <h3 className="font-bold py-2">CSS3 Styling</h3>
        <p>
          CSS, or Cascading Style Sheets, is a styling language used to define
          the presentation and layout of web pages.
        </p>
      </div>

      <div className="card py-8 text-center w-full sm:w-1/3">
        <Link to={"/logo"}>
          <img src={graphic} alt="graphic" className="m-auto w-[150px]" />
        </Link>
        <h3 className="font-bold py-2">Graphic Design</h3>
        <p>
          Graphic design is the art of creating visual content using typography,
          imagery, and other design elements.
        </p>
      </div>
    </div>
  );
};

export default Card;
