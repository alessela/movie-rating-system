import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieGridData } from "../../../models/Movie";

const MovieGridItem = (movie = MovieGridData) => {
    const image_url = movie.poster_path == null ? 'logo192.png' :
        `${process.env.REACT_APP_IMAGE_TMDB_URL}${movie.poster_path}`

    return (
        <Col xs={6} sm={4} md={3} lg={2}>
            <Link to={`/movie/${movie.id}`}>
                <Card>
                    <img src={image_url} alt={movie.title} width={'100%'}/>
                    <h6 className="m-0">{movie.title}</h6>
                    <p className="m-0" style={{ fontSize: 12}}>{movie.release_date}</p>
                </Card>
            </Link>
        </Col>
        
    )
}

export default MovieGridItem;