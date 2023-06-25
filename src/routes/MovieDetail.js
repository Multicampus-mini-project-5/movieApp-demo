import { useLocation, useParams } from "react-router-dom";

function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();
  
  return(
    <div className="page-container">
        <img 
          style={{width: "300px", height: "450px"}}
          src={state.coverImg} alt={state.title}
        />
        <div>
          <h2 className="movie__title">
            {title}
          </h2>
          <h5 className="movie__year">{state.year}</h5>
          <ul className="movie__genres">
            {state.genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <div>{state.runtime}minutes</div>
          <p className="summary">{state.summary}</p>
        </div>     
    </div>
  );
}

export default MovieDetail;