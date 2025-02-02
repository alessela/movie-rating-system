import { Col, Row, Table } from "react-bootstrap";
import RatingSystem from "../RatingSystem/RatingSystem";
import { Movie } from "../../models/Movie";

const MovieTopLevelDetails = (movie = Movie) => {
    const image_url = movie.poster_path == null ? '/logo192.png' :
        `${process.env.REACT_APP_IMAGE_TMDB_URL}${movie.poster_path}`

    return (
        <Row className="g-2">
            <Col xs={12} sm={6} md={4} lg={3}>
                <img src={image_url} alt={movie.poster_path} width={'100%'}/>
            </Col>
            <Col>
                <Table bordered>
                    <tbody>
                        <tr>
                            <th>Original title</th>
                            <td>{movie.original_title}</td>
                        </tr>
                        <tr>
                            <th>Release date</th>
                            <td>{movie.release_date}</td>
                        </tr>
                        <tr>
                            <th>Genres: </th>
                            <td>{ movie.genres }</td>
                        </tr>
                        <tr>
                            <th>Rating: </th>
                            <td>{ movie.vote_average }</td>
                        </tr>
                        <tr>
                            <th>Votes: </th>
                            <td>{ movie.vote_count }</td>
                        </tr>
                    </tbody>
                </Table>

                <h4>Overview</h4>
                <p>{ movie.overview}</p>
                
                <RatingSystem type="movie" id={movie.id}/>
            </Col>
        </Row>
    )
}

export default MovieTopLevelDetails;