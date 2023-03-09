import { Link } from "react-router-dom";
import html from "../assets/images/logo_html.png";

const Html = () => {
  return (
    <div>
      <div className="card py-4 px-10 flex flex-col">
        <div>
          <img
            src={html}
            alt="html"
            className="m-auto w-1/3 md:w-1/4 lg:w-1/5"
          />
        </div>
        <h3 className="font-bold py-2 text-xl text-center">HTML5 Markup</h3>
        <p>
          HTML, or Hypertext Markup Language, is a markup language used to
          create and structure content for the web. It provides a standardized
          way to create web pages, using a series of tags and attributes to
          describe the structure and content of a page. HTML is the foundation
          of the web, providing the framework for creating and displaying
          content in web browsers.
        </p>
        <p className="pt-6">
          HTML is composed of various tags, which are used to define the
          structure of a web page. Tags are used to define headings, paragraphs,
          links, images, tables, and other elements. These tags are enclosed in
          angled brackets and contain attributes that define additional
          information about the element. HTML documents are typically saved with
          a .html extension and can be viewed in any web browser.
        </p>
        <p className="pt-6">
          One of the main benefits of HTML is its simplicity. It is relatively
          easy to learn and can be written using a simple text editor.
          Additionally, HTML is a universal language, meaning it can be
          understood by any web browser, making it a reliable way to create and
          display content on the web. HTML is also highly customizable, allowing
          web developers to create unique and visually appealing designs.
        </p>
        <p className="pt-6">
          HTML is also an essential component of web accessibility. By using
          semantic markup and adhering to accessibility guidelines, web
          developers can create web pages that are accessible to individuals
          with disabilities. This includes using descriptive text for images and
          other multimedia content, providing alternative text for links, and
          using proper heading tags to create a clear and logical structure for
          the page.
        </p>
        <p className="py-6">
          Overall, HTML is a critical component of web development, providing a
          standardized way to create and structure content for the web. By using
          HTML, web developers can create web pages that are accessible,
          reliable, and customizable, providing a foundation for the development
          of modern web applications and services.
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
