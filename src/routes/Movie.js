import { useEffect, useState } from "react";
import axios from "axios";
import MovieComponent from "../components/MovieComponent.js";


function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://yts-proxy.nomadcoders1.now.sh/list_movies.json`)
      .then(json => {
        console.log(json.data.data.movies);
        setMovies(json.data.data.movies);
        setLoading(false);
      })
    }, []);
  console.log(movies);

  return (
    <div >
      {loading 
        ? <div className="loader">
            <span className="loader_text">Loading...</span>
          </div> 
        : 
        <div className="app-container">
          {movies.map((movie) => (
            <MovieComponent
              key={movie.id} 
              coverImg={movie.medium_cover_image}
              rating={movie.rating}
              title={movie.title}
              genres={movie.genres}
              year={movie.year}
              summary={movie.summary}
              runtime={movie.runtime}
            />
          ))};
        </div>}
    </div>

);
}

export default Movie;