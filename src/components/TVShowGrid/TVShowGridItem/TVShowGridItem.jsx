import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TVShowGridData } from "../../../models/TVShow";

const TVShowGridItem = (show = TVShowGridData) => {
    const image_url = show.poster_path == null ? '/logo192.png' :
        `${process.env.REACT_APP_IMAGE_TMDB_URL}${show.poster_path}`

    return (
        <Col xs={6} sm={4} md={3} lg={2}>
            <Link to={`/tv/${show.id}`}>
                <Card>
                    <img src={image_url} alt={show.name} width={'100%'}/>
                    <h6 className="m-0">{show.name}</h6>
                    <p className="m-0" style={{ fontSize: 12}}>{show.first_air_date}</p>
                </Card>
            </Link>
        </Col>
    )
}

export default TVShowGridItem;