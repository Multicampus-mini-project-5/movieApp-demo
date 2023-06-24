import PropTypes from "prop-types";

function Movie({coverImg, title, rating, genres}) {
  return (
    
    <div className="movie-container">
      <img src={coverImg} alt={title}/>
      <div className="movie-info">
        <h2>{title}</h2>
        <h2 className="rating">{rating}</h2>
        <ul className="genre">
          {genres.map(genre => 
          <li key={genre}>{genre}</li>)}
        </ul>
      </div>

    </div>

  );
}

//propTypes 설정
Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;