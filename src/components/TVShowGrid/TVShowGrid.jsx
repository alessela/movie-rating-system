import TVShowGridItem from "./TVShowGridItem/TVShowGridItem"
import TVShow from "../../models/TVShow"
import { Row } from "react-bootstrap"

/**
 * @param {{ shows: TVShow[] }} shows 
 */
function TVShowGrid ({ shows }) {
    return (
        <div className="overflow-auto m-0" style={{ flexGrow: 1}}>
            <Row className="g-2">
            {
                shows.map((show, index) => <TVShowGridItem key={index}
                                                           id={show.id}
                                                           name={show.name}
                                                           poster_path={show.poster_path}
                                                           first_air_date={show.first_air_date}
                                                           genre_ids={show.genre_ids}/>)
            }
            </Row>
        </div>
    )
}

export default TVShowGrid;