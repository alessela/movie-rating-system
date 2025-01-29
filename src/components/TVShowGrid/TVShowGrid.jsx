import TVShow from "../../models/TVShow"
import TVShowGridItem from "../TVShowGridItem/TVShowGridItem"

/**
 * @param {{ shows: TVShow[] }} shows
 */
function TVShowGrid({ shows}) {
    return (
        <div className="row column-gap-3" style={{ margin: 0}}>
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

export default TVShowGrid;