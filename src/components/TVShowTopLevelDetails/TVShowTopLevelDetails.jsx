import { Col, Row, Table } from "react-bootstrap";
import { TVShowGridData } from "../../models/TVShow";
import RatingSystem from "../RatingSystem/RatingSystem";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const TVShowTopLevelDetails = (show = TVShowGridData) => {
  const image_url = show.poster_path == null ? '/logo192.png' :
        `${process.env.REACT_APP_IMAGE_TMDB_URL}${show.poster_path}`

        return (
          <Row className="g-2">
              <Col xs={12} sm={6} md={4} lg={3}>
                  <img src={image_url} alt={show.poster_path} width={'100%'}/>
              </Col>
              <Col>
                  <Table bordered>
                      <tbody>
                          <tr>
                              <th>Original name</th>
                              <td>{show.original_name}</td>
                          </tr>
                          <tr>
                              <th>First air date</th>
                              <td>{show.first_air_date}</td>
                          </tr>
                          <tr>
                              <th>Last air date</th>
                              <td>{show.last_air_date}</td>
                          </tr>
                          <tr>
                              <th>Genres: </th>
                              <td>{ show.genres }</td>
                          </tr>
                          <tr>
                              <th>Rating: </th>
                              <td>{ show.vote_average }</td>
                          </tr>
                          <tr>
                              <th>Votes: </th>
                              <td>{ show.vote_count }</td>
                          </tr>
                      </tbody>
                  </Table>

                  <FavoriteButton type="tv" id={show.id} />
                  <RatingSystem type="tv" id={show.id}/>
  
                  <h4>Overview</h4>
                  <p>{ show.overview }</p>
              </Col>
          </Row>
      )
};

export default TVShowTopLevelDetails;
