import { Card } from "react-bootstrap";
import TVShow from "../../../models/TVShow";

/**
 * @param {TVShow} show 
 */
function TVShowGridItem (show) {
    return (
        <Card style={{ width: '200px', padding: 0 }}>
            <img src={`${process.env.REACT_APP_IMAGE_TMDB_URL}${show.poster_path}`} 
                 width={200}/>
            <h6 style={{margin: 0}}>{show.name}</h6>
            <p style={{margin: 0, fontSize: 12}}>{show.first_air_date}</p>
        </Card>
    )
}

export default TVShowGridItem;