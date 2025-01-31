import Movie from "../../models/Movie";
import MovieGridItem from "./MovieGridItem/MovieGridItem";
import Row from 'react-bootstrap/Row'

/**
 * @param {{ movies: Movie[]}} movies 
 */
function MovieGrid ({ movies }) {
    return (
        <div className="overflow-auto mt-1 p-1" style={{ flexGrow: 1}}>
            <Row className="g-2">
            {
                movies.map((movie, index) => <MovieGridItem key={index}
                                                            id={movie.id}
                                                            title={movie.title}
                                                            poster_path={movie.poster_path}
                                                            release_date={movie.release_date}
                                                            genre_ids={movie.genre_ids}/>)
            }
            </Row>
        </div>
    )
}

export default MovieGrid;