import MovieGridItem from "./MovieGridItem/MovieGridItem";
import Row from 'react-bootstrap/Row'

/**
 * @param {{ movies: Array<{ id: number, title: string, poster_path: string, release_date: string }>}} movies 
 */
function MovieGrid ({ movies }) {
    return (
        <div className="overflow-auto mt-1" style={{ flexGrow: 1}}>
            <Row className="g-2">
            {
                movies.map((movie, index) => <MovieGridItem key={index}
                                                            id={movie.id}
                                                            title={movie.title}
                                                            poster_path={movie.poster_path}
                                                            release_date={movie.release_date}/>)
            }
            </Row>
        </div>
    )
}

export default MovieGrid;