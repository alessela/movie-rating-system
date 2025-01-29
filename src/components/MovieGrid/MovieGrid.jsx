import { Button } from "react-bootstrap";
import Movie from "../../models/Movie";
import MovieGridItem from "../MovieGridItem/MovieGridItem";

/**
 * @param {{ movies: Movie[] }} movies 
 */
function MovieGrid ({ movies }) {


    return (
        <div className="pagination" style={{ display: 'flex'}}>
            {/* <Button>Left</Button> */}
            <div className="row column-gap-3" style={{ margin: 0 }}>
            {
                movies.map((movie, index) => <MovieGridItem key={index}
                                                            id={movie.id}
                                                            title={movie.title}
                                                            poster_path={movie.poster_path}
                                                            release_date={movie.release_date}
                                                            genre_ids={movie.genre_ids}/>)
            }
            </div>
            {/* <Button>Right</Button> */}
        </div>
    )
}

export default MovieGrid;