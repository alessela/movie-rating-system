import Movie from "../../models/Movie";
import MovieGridItem from "./MovieGridItem/MovieGridItem";

/**
 * @param {{ movies: Movie[]}} movies 
 */
function MovieGrid ({ movies }) {


    return (
        <div className="d-flex overflow-auto m-0">
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

export default MovieGrid;