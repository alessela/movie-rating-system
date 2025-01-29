
import { Card } from "react-bootstrap";
import Movie from "../../../models/Movie";
/**
 * @param {Movie} movie 
 */
function MovieGridItem (movie) {
    return (
        <Card style={{ width: '200px', padding: 0 }}>
            <img src={`${process.env.REACT_APP_IMAGE_TMDB_URL}${movie.poster_path}`} 
                 width={200}/>
            <h6 style={{margin: 0}}>{movie.title}</h6>
            <p style={{margin: 0, fontSize: 12}}>{movie.release_date}</p>
        </Card>
    )
}

export default MovieGridItem;