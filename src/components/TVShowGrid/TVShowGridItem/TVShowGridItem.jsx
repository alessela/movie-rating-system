import { Card } from "react-bootstrap";
import TVShow from "../../../models/TVShow";
import './TVShowGridItem.css'

/**
 * @param {TVShow} show 
 */
function TVShowGridItem (show) {
    return (
        <Card className="show-grid-item p-0">
            <img src={`${process.env.REACT_APP_IMAGE_TMDB_URL}${show.poster_path}`} 
                 width={'100%'}/>
            <h6 style={{margin: 0}}>{show.name}</h6>
            <p style={{margin: 0, fontSize: 12}}>{show.first_air_date}</p>
        </Card>
    )
}

export default TVShowGridItem;