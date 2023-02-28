import { data } from "../helper/data";
import React, { useState } from "react";
import FilmYear from "../components/FilmYear";
import FilmInfo from "../components/FilmInfo";
const Main = () => {
  const [show, setShow] = useState(0);
  // console.log(data);
  return (
    <div className="d-block d-sm-block d-lg-flex justify-content-evenly align-items-center my-div">
      <FilmYear data={data} show={show} setShow={setShow} />
      <FilmInfo data={data[show]} />
    </div>
  );
};
export default Main;
