import Subscribe from "../components/Subscribe";

const About = () => {
  return (
    <div>
      <Subscribe />
      <div className="py-6 px-16 md:px-6 lg:px-16 flex flex-col md:flex-row gap-8 overflow-auto">
        <div className="left">
          <h3 className="text-gray font-bold py-2">About Us</h3>
          <p className="pb-4">
            We're passionate about helping businesses achieve their goals
            through the power of the web. Whether you're looking to create a new
            website, improve your online presence, or increase your sales
            through digital marketing, we've got you covered. With years of
            experience in the industry and a team of talented professionals, we
            pride ourselves on delivering high-quality results that exceed our
            clients' expectations.
          </p>
          <p className="text-white bg-gray-600 p-4">
            We're not just another web agency. We're a team of passionate
            professionals who are dedicated to helping our clients succeed. We
            believe in building long-term relationships with our clients based
            on trust, integrity, and mutual respect. Our team is always
            up-to-date with the latest web trends and technologies, and we're
            constantly pushing ourselves to deliver the best possible results
            for our clients. With us, you can expect personalized service,
            attention to detail, and a commitment to excellence that is
            unmatched in the industry. So why settle for less? Choose us for all
            your web needs and experience the difference that true expertise and
            dedication can make.
          </p>
          <p className="py-4">
            We are a team of experienced and creative professionals dedicated to
            providing high-quality web design services to our clients. Our
            passion for designing and developing websites has led us to create
            unique and visually stunning websites that are both user-friendly
            and functional. We take pride in our ability to understand our
            clients' needs and work closely with them to ensure their vision is
            brought to life. Our commitment to excellence, attention to detail,
            and customer satisfaction are the driving forces behind our success.
            We are excited to partner with you and help you achieve your online
            goals.
          </p>
          <p className="text-white bg-gray-600 p-4">
            At the heart of our business is a commitment to customer
            satisfaction. We believe in working closely with our clients to
            understand their unique needs and goals, and then developing
            customized solutions that meet those needs. From the initial
            consultation to the final delivery of your project, we'll be there
            every step of the way to ensure you're completely satisfied with the
            results. So why wait? Contact us today and let us help you take your
            business to the next level!
          </p>
        </div>
        <div className="right text-white bg-gray-600 p-4 h-fit">
          <h3 className="py-2 font-bold">What We Do</h3>
          <p>
            We offer a wide range of web services to help businesses of all
            sizes succeed online. Our services include website design and
            development, e-commerce solutions, digital marketing, search engine
            optimization (SEO), and more. Whether you're just starting out or
            looking to take your business to the next level, we have the
            expertise and experience to help you achieve your goals. Our team of
            professionals will work with you to understand your unique needs and
            develop a customized strategy that meets your budget and timeline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
