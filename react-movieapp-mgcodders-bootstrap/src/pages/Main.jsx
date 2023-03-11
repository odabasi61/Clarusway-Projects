import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";


const Main = () => {
  // const API_KEY = "0a06593e3ed888b80a4b7c4da86b6bb9";
  // const BASE_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  // const [movies, setMovies] = useState([]);
  // const getMovie = async () => {
  //   try {
  //     const { data } = await axios(BASE_URL);
  //     setMovies(data.results);
  //   } catch (error) {
  //   }
  // };

  // useEffect(() => {
  //   getMovie();
  // }, []);
  return ( 
  <div className="movie-background d-flex justify-content-center">
  <Link to="/movies" className="buton"><button className="btn btn-primary  my-5 ">Go To Movies</button></Link> 

  </div>
    // <div className="main-page">
    //   <div className="container my-3 ">
    //     <div className="row height d-flex justify-content-center align-items-center">
    //       <div className="col-md-6">
    //         <div className="search d-flex">
    //           <i className="fa fa-search" />
    //           <input type="text" className="form-control" placeholder="Search a movie.." />
    //           <button className="btn btn-primary mx-2">Search</button>
              
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="main-content">
    //   {movies.map((item,i)=>{
    //     return <MovieCard item={item} key={i}/>
    //   })}
    //   </div>
    // </div>
  );
};

export default Main;
