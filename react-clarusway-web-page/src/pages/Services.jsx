import Subscribe from "../components/Subscribe";

const Services = () => {
  return (
    <div>
      <Subscribe />
      <div className="flex flex-col lg:flex-row justify-center sm:px-12 lg:px-2">
        <div className="left p-4">
          <h3 className="font-bold text-xl py-3">Services</h3>
          <div className="cart border-2 border-gray-400 bg-slate-200 px-4 mb-4 shadow-lg hover:scale-105 duration-500">
            <h3 className="font-bold text-xl py-3">
              Website Security Services
            </h3>
            <p>
              We ensure that the website is protected from cyber threats such as
              hacking, malware, and DDoS attacks.
            </p>
            <p className="py-4">Pricing: $250 per month</p>
          </div>

          <div className="cart border-2 border-gray-400 bg-slate-200 px-4 mb-4 shadow-lg hover:scale-105 duration-500">
            <h3 className="font-bold text-xl py-3">
              Website Migration And Transfer
            </h3>
            <p>
              We handle services to move a website from one hosting provider to
              another or from one platform to another.
            </p>
            <p className="py-4">Pricing: $3,500 - $7,000</p>
          </div>

          <div className="cart border-2 border-gray-400 bg-slate-200 px-4 mb-4 shadow-lg hover:scale-105 duration-500">
            <h3 className="font-bold text-xl py-3">
              Search Engine Optimization
            </h3>
            <p>
              We are serving search engine optimization (SEO) to improve a
              website's visibility and ranking on search engines like Google.
            </p>
            <p className="py-4">Pricing: $1,500 - $3,000</p>
          </div>

          <div className="cart border-2 border-gray-400 bg-slate-200 px-4 shadow-lg hover:scale-105 duration-500">
            <h3 className="font-bold text-xl py-3">Graphic Design</h3>
            <p>
              Graphic design services for branding, logo design, and other
              visual elements of a website or marketing campaign.
            </p>
            <p className="py-4">Pricing: $2,500 - $5,500</p>
          </div>
        </div>

        <div className="right p-4">
          <form className="text-white bg-gray-600 px-4">
            <h3 className="font-bold text-xl py-3">Get A Quote</h3>

            <div className="pb-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="outline-none px-2 text-black w-full"
              />
            </div>

            <div className="pb-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="outline-none px-2 text-black w-full"
              />
            </div>

            <div className="pb-4">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                id="message"
                placeholder="Message"
                className="outline-none px-2 text-black resize-none w-full"
              ></textarea>
            </div>
            <div className="pb-4">
              <button className="text-white bg-red-500 py-2 px-4 w-full">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Services;
