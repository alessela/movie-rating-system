import TVShowGridItem from "./TVShowGridItem/TVShowGridItem"
import PropTypes from "prop-types"
import TVShow from "../../models/TVShow"

/**
 * @param {{ shows: TVShow[] }} shows 
 */
function TVShowGrid ({ shows }) {
    return (
        <div className="d-flex overflow-auto m-0">
            {
                shows.map((show, index) => <TVShowGridItem key={index}
                                                           id={show.id}
                                                           name={show.name}
                                                           poster_path={show.poster_path}
                                                           first_air_date={show.first_air_date}
                                                           genre_ids={show.genre_ids}/>
                                                           )
            }
        </div>
    )
}

TVShowGrid.propTypes = {
    shows: PropTypes.arrayOf(PropTypes.object)
}

export default TVShowGrid;