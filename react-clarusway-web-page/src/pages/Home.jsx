import Card from "../components/Card";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <div>
      <div className="image w-full h-[40vh] flex justify-center flex-col text-center text-white gap-4 px-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl  font-bold">
          Professional Web Design
        </h1>
        <p>
          Professional web design involves creating visually appealing,
          user-friendly websites that meet the needs and goals of the client and
          their target audience.
        </p>
      </div>
      <Subscribe />
      <Card />
    </div>
  );
};

export default Home;
