import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function MovieComponent(props) {
  const navigate = useNavigate();
  
  const onClickMovie = () => {
    navigate(`/movie/${props.title}`, {
      state: props
    });
  }

  return (  
    <div className="movie-container" onClick={onClickMovie}>
      <img src={props.coverImg} alt={props.title}/>
      <div className="movie-info">
        <h2>{props.title}</h2>
        <h2 className="rating">{props.rating}</h2>
        <ul className="genre">
          {props.genres.map(genre => 
          <li key={genre}>{genre}</li>)}
        </ul>
      </div>

    </div>

  );
}

//propTypes 설정
MovieComponent.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MovieComponent;