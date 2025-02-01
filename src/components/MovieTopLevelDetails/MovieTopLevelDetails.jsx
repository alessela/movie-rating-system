import { Col, Row, Table } from "react-bootstrap";
import RatingSystem from "../RatingSystem/RatingSystem";

const MovieTopLevelDetails = ({ 
    poster_path, original_title, release_date,
    genres, vote_average, vote_count, overview
}) => {
    const image_url = poster_path == null ? 'logo192.png' :
        `${process.env.REACT_APP_IMAGE_TMDB_URL}${poster_path}`

    return (
        <Row className="g-2">
            <Col xs={12} sm={6} md={4} lg={3}>
                <img src={image_url} alt={poster_path} width={'100%'}/>
            </Col>
            <Col>
                <Table bordered>
                    <tbody>
                        <tr>
                            <th>Original title</th>
                            <td>{original_title}</td>
                        </tr>
                        <tr>
                            <th>Release date</th>
                            <td>{release_date}</td>
                        </tr>
                        <tr>
                            <th>Genres: </th>
                            <td>{ genres }</td>
                        </tr>
                        <tr>
                            <th>Rating: </th>
                            <td>{ vote_average }</td>
                        </tr>
                        <tr>
                            <th>Votes: </th>
                            <td>{ vote_count }</td>
                        </tr>
                    </tbody>
                </Table>

                <h4>Overview</h4>
                <p>{overview}</p>
                
                <RatingSystem />
            </Col>
        </Row>
    )
}

export default MovieTopLevelDetails;