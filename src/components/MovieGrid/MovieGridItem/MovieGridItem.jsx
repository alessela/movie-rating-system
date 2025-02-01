import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieGridItem = ({ id, title, poster_path, release_date}) => {
    const image_url = poster_path == null ? 'logo192.png' :
        `${process.env.REACT_APP_IMAGE_TMDB_URL}${poster_path}`

    return (
        <Col xs={6} sm={4} md={3} lg={2}>
            <Link to={`/movie/${id}`}>
                <Card>
                    <img src={image_url} width={'100%'}/>
                    <h6 className="m-0">{title}</h6>
                    <p className="m-0" style={{ fontSize: 12}}>{release_date}</p>
                </Card>
            </Link>
        </Col>
        
    )
}

export default MovieGridItem;