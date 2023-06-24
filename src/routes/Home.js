import { useEffect, useState } from "react";
import Movie from "../components/Movie.js";
import axios from "axios";


function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     `https://yts-proxy.nomadcoders1.now.sh/list_movies.json`   //api를 받아온다
  //   )
  //   .then((response) => response.json())                                       // json파일형태로 응답을 받아오고
  //   .then(json => {
  //     console.log(json);
  //     setMovies(json.data.movies)
  //     setLoading(false);
  //   });                                                                        // json파일 안에 data 폴더 안에 movies라는 내용만 받아와 
  //                                                                              // Movies 상태변수에 리스트형식으로 저장

  // }, []);

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
            <Movie
              key={movie.id} 
              coverImg={movie.medium_cover_image}
              rating={movie.rating}
              title={movie.title}
              genres={movie.genres}
            />
          ))};
        </div>}
    </div>

);
}

export default Home;