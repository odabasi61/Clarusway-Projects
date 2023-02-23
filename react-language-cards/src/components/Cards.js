import { useState } from "react";

const Cards = (data) => {
  const [toggle, setToggle] = useState(true);

  const { name, img, options } = data;

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className="cards rounded-4 p-4 overflow:hidden w-100 h-100"
      role="button"
    >
      {toggle ? (
        <div className="front-card d-flex flex-column align-items-center gap-3">
          <img src={img} alt="" />
          <p>{name}</p>
        </div>
      ) : (
        <div className="back-card p-2 d-flex align-items-left text-start">
          <ul>
            {options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cards;
