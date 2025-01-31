
import { Card } from "react-bootstrap";
import Movie from "../../../models/Movie";
import './MovieGridItem.css'

/**
 * @param {Movie} movie 
 */
function MovieGridItem (movie) {
    return (
        <Card className="movie-grid-item p-0">
            <img src={`${process.env.REACT_APP_IMAGE_TMDB_URL}${movie.poster_path}`} 
                 width={'100%'}/>
            <h6 className="m-0">{movie.title}</h6>
            <p className="m-0" style={{ fontSize: 12}}>{movie.release_date}</p>
        </Card>
    )
}

export default MovieGridItem;