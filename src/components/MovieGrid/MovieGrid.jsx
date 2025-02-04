import { MovieGridData } from "../../models/Movie";
import MovieGridItem from "./MovieGridItem/MovieGridItem";
import Row from 'react-bootstrap/Row'

const MovieGrid = ({ movies = [MovieGridData].slice(0, 0) }) => (
    <div className="overflow-auto mt-1 pl-1 pe-1" style={{ flexGrow: 1 }}>
        <Row className="g-2">
        {
            movies.length === 0 ? 
            <p className="alert alert-info">No movies found</p> :
            movies.map((movie, index) => <MovieGridItem key={index}
                                                        id={movie.id}
                                                        title={movie.title}
                                                        poster_path={movie.poster_path}
                                                        release_date={movie.release_date}/>)
        }
        </Row>
    </div>
)

export default MovieGrid;