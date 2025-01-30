import MovieGridItem from "./MovieGridItem/MovieGridItem";
import PropTypes from "prop-types"

function MovieGrid ({ movies }) {


    return (
        <div className="d-flex overflow-auto" style={{ margin: 0 }}>
        {
            movies.map((movie, index) => <MovieGridItem key={index}
                                                        id={movie.id}
                                                        title={movie.title}
                                                        poster_path={movie.poster_path}
                                                        release_date={movie.release_date}
                                                        genre_ids={movie.genre_ids}/>)
        }
        </div>
    )
}

MovieGrid.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
}

export default MovieGrid;