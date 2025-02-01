import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function TVShowGridItem ({ id, name, poster_path, first_air_date }) {
    const image_url = poster_path == null ? 'logo192.png' :
        `${process.env.REACT_APP_IMAGE_TMDB_URL}${poster_path}`

    return (
        <Col xs={6} sm={4} md={3} lg={2}>
            <Link to={`tv/${id}`}>
                <Card>
                    <img src={image_url} alt={name} width={'100%'}/>
                    <h6 className="m-0">{name}</h6>
                    <p className="m-0" style={{ fontSize: 12}}>{first_air_date}</p>
                </Card>
            </Link>
        </Col>
    )
}

export default TVShowGridItem;