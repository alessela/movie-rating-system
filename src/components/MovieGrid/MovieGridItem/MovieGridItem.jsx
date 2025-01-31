
import { Card, Col } from "react-bootstrap";
import Movie from "../../../models/Movie";

/**
 * @param {Movie} movie 
 */
function MovieGridItem (movie) {
    return (
        <Col xs={6} sm={4} md={3} lg={2}>
            <Card>
                <img src={`${process.env.REACT_APP_IMAGE_TMDB_URL}${movie.poster_path}`} 
                    width={'100%'}/>
                <h6 className="m-0">{movie.title}</h6>
                <p className="m-0" style={{ fontSize: 12}}>{movie.release_date}</p>
            </Card>
        </Col>
        
    )
}

export default MovieGridItem;