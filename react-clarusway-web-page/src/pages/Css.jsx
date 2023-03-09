import { Link } from "react-router-dom";
import css from "../assets/images/logo_css.png";

const Html = () => {
  return (
    <div>
      <div className="card py-4 px-10 flex flex-col">
        <div>
          <img
            src={css}
            alt="html"
            className="m-auto w-1/3 md:w-1/4 lg:w-1/5"
          />
        </div>
        <h3 className="font-bold py-2 text-xl text-center">CSS3 Styling</h3>
        <p>
          CSS, or Cascading Style Sheets, is a styling language used to define
          the presentation and layout of web pages. It provides web developers
          with a way to create visually appealing and consistent designs for
          websites, separate from the HTML structure. CSS allows developers to
          control the look and feel of web pages, including colors, fonts,
          layout, and even animations.
        </p>
        <p className="pt-6">
          CSS works by using selectors to target specific HTML elements and
          applying styles to them. A CSS rule consists of a selector and one or
          more properties, which determine how the selected element should be
          styled. CSS can be added to an HTML document in various ways,
          including inline styles, internal styles, and external style sheets.
        </p>
        <p className="pt-6">
          One of the main benefits of CSS is that it separates the presentation
          of a web page from its content, making it easier to maintain and
          update. With CSS, web developers can create a single style sheet that
          can be applied to multiple pages on a website, ensuring consistency in
          design and layout. CSS also enables developers to create responsive
          designs that adapt to different screen sizes and devices, making
          websites accessible and user-friendly on desktops, laptops, tablets,
          and smartphones.
        </p>
        <p className="pt-6">
          CSS also provides web developers with the ability to create complex
          layouts and effects that were previously only possible with images or
          JavaScript. For example, CSS can be used to create multi-column
          layouts, drop shadows, and gradients, among many other effects. CSS
          also allows for the creation of animations and transitions, which can
          be used to add interactivity and engagement to web pages.
        </p>
        <p className="py-6">
          Overall, CSS is an essential tool for web development, allowing for
          the creation of visually appealing, user-friendly, and responsive
          websites. By separating the presentation from the content, CSS enables
          web developers to create flexible, scalable designs that can adapt to
          changing requirements and trends.
        </p>
        <Link to={"/"} className="text-center w-1/5 m-auto">
          <button className="py-2 px-4 text-white bg-red-500 w-full">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Html;
