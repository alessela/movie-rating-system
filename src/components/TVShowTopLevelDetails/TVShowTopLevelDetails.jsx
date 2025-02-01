import { Col, Row, Table } from "react-bootstrap";

const TVShowTopLevelDetails = ({
  poster_path, original_name, first_air_date,
  last_air_date, genres, vote_average, vote_count, overview
}
) => {
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
                              <th>Original name</th>
                              <td>{original_name}</td>
                          </tr>
                          <tr>
                              <th>First air date</th>
                              <td>{first_air_date}</td>
                          </tr>
                          <tr>
                              <th>Last air date</th>
                              <td>{last_air_date}</td>
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
              </Col>
          </Row>
      )
};

export default TVShowTopLevelDetails;
