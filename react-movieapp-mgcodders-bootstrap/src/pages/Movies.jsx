import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const API_KEY = "589593ffc7c21f1e57e516b09906736c";
  const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setMovies(data.results);
    } catch (error) {}
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="main-page">
      <div className="container my-3 ">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="search d-flex">
              <i className="fa fa-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search a movie.."
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-primary mx-2">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content d-flex flex-wrap p-4 gap-4 justify-content-center items-center bg-warning">
        {movies
          .filter((item) =>
            item.title.toLowerCase().includes(search.trim().toLowerCase())
          )
          .map((item, i) => {
            const { id } = item;
            return (
              <MovieCard
                item={item}
                key={i}
                onClick={() => navigate(`${id}`)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Movies;
