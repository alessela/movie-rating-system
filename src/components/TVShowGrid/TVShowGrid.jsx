import { TVShowGridData } from "../../models/TVShow";
import TVShowGridItem from "./TVShowGridItem/TVShowGridItem"
import { Row } from "react-bootstrap"

const TVShowGrid = ({ shows = [TVShowGridData].slice(0, 0) }) => (
    <div className="overflow-auto mt-1 pl-1 pe-1" style={{ flexGrow: 1 }}>
        <Row className="g-2">
        {
            shows.length === 0 ?
            <p className="alert alert-info">No TV shows found</p> : 
            shows.map((show, index) => <TVShowGridItem key={index}
                                                        id={show.id}
                                                        name={show.name}
                                                        poster_path={show.poster_path}
                                                        first_air_date={show.first_air_date}/>)
        }
        </Row>
    </div>
)

export default TVShowGrid;