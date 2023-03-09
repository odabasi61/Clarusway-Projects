import { Link } from "react-router-dom";
import logo from "../assets/images/logo_brush.png";

const Html = () => {
  return (
    <div>
      <div className="card py-4 px-10 flex flex-col">
        <div>
          <img
            src={logo}
            alt="html"
            className="m-auto w-1/3 md:w-1/4 lg:w-1/5"
          />
        </div>
        <h3 className="font-bold py-2 text-xl text-center">Graphic Design</h3>
        <p>
          Graphic design is the art of creating visual content using typography,
          imagery, and other design elements. It involves combining creativity
          with technical skills to produce graphics that communicate a message
          or tell a story. Graphic design can be used in a variety of mediums,
          including print, digital, and environmental design. Its goal is to
          create visually compelling and engaging designs that effectively
          communicate a message to a target audience.
        </p>
        <p className="pt-6">
          One of the main elements of graphic design is typography, which
          involves the use of fonts and typefaces to create text-based designs.
          Typography is crucial in creating effective designs that are easy to
          read and visually appealing. Another important element is imagery,
          which can include photos, illustrations, and icons. Images are used to
          convey information, create a mood, or evoke emotions in the viewer.
        </p>
        <p className="pt-6">
          Graphic design also involves color theory, which is the study of how
          colors can be used to create different moods and emotions. Colors can
          be used to create contrast, emphasis, and hierarchy in designs.
          Additionally, graphic designers use principles such as balance,
          alignment, and proximity to create designs that are aesthetically
          pleasing and functional.
        </p>
        <p className="pt-6">
          One of the benefits of graphic design is its versatility. It can be
          used in various mediums, including print, digital, and environmental
          design. Print design involves creating designs for physical materials
          such as brochures, flyers, and packaging. Digital design involves
          creating designs for websites, social media, and other digital
          platforms. Environmental design involves creating designs for physical
          spaces, such as signage and wayfinding.
        </p>
        <p className="py-6">
          Overall, graphic design is a crucial aspect of modern communication,
          used to create designs that effectively communicate a message to a
          target audience. By using a combination of typography, imagery, and
          other design elements, graphic designers can create visually
          compelling and engaging designs that effectively convey a message or
          tell a story.
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
