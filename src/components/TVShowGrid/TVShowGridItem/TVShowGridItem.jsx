import { Card, Col } from "react-bootstrap";
import TVShow from "../../../models/TVShow";

/**
 * @param {TVShow} show 
 */
function TVShowGridItem (show) {
    return (
        <Col xs={6} sm={4} md={3} lg={2}>
            <Card>
                <img src={`${process.env.REACT_APP_IMAGE_TMDB_URL}${show.poster_path}`} 
                    width={'100%'}/>
                <h6 className="m-0">{show.name}</h6>
                <p className="m-0" style={{ fontSize: 12}}>{show.first_air_date}</p>
            </Card>
        </Col>
    )
}

export default TVShowGridItem;