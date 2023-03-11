import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const MovieDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [video, setVideo] = useState([]);

  const API_KEY = "0a06593e3ed888b80a4b7c4da86b6bb9";

  const getVideo = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => {
        // if (!res.ok) {
        //   throw new Error("Something went wrong");
        // }
        // console.log(res);
        return res.json();
      })
      .then((data) => setVideo(data.results))
      .catch((err) => console.log(err));
  };
  // console.log(id)

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => {
        // if (!res.ok) {
        //   throw new Error("Something went wrong");
        // }
        // console.log(res);
        return res.json();
      })
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
    getVideo();
  }, [id]);

  // console.log(movies);
  // console.log(video)

  const getposterURL = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`;
  };

  const getvideoLink = (video) => {
    return `https://www.youtube.com/watch?v=${video}`;
  };

  return (
    <div className="movie-detail">
      <div className="overview w-100 p-4 d-flex justify-content-center row container m-0">
        <div className="image col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <img src={getposterURL(movies.poster_path)} alt="poster" />
        </div>
        <div className="details d-flex flex-column gap-1 p-4 col-12 col-md-6 col-lg-8">
          <p>Overview : {movies.overview}</p>
          <p>Release Date : {movies.release_date}</p>
          <p>Rate : {movies.vote_average} </p>
          <p>Total Vote : {movies.vote_count} </p>
          <ul className="trailers d-flex flex-wrap align-items-center p-0">
            Watch trailers :
            {video.map((item, i) => {
              // console.log(item);
              const { key } = item;
              return (
                <>
                  <a
                    className="text-decoration-none p-2"
                    target="_blank"
                    href={getvideoLink(key)}
                  >
                    {i + 1}
                  </a>
                  <br />
                </>
              );
            })}
          </ul>
          <NavLink className="btn btn-danger w-50" onClick={() => navigate(-1)}>
            Go Back
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
