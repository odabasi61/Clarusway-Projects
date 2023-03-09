import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-col text-center sm:flex-row items-center gap-4 justify-between bg-gray-600 p-8">
      <div>
        <h2 className="text-white text-xl font-bold">
          Subscribe To Our Newsletter
        </h2>
      </div>
      <form className="flex gap-3 m-auto sm:m-0">
        <input
          className="px-2 outline-none"
          type="email"
          placeholder="Enter email..."
        />
        <button className="text-white bg-red-600 px-6 py-2">Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;
