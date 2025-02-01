import { useParams } from "react-router-dom";
import BasePage from "../BasePage/BasePage";
import useMovieShowDetails from "../../hooks/useMovieShowDetails";
import { Spinner} from "react-bootstrap";
import Movie from "../../models/Movie";
import MovieTopLevelDetails from "../../components/MovieTopLevelDetails/MovieTopLevelDetails";

const MovieDetails = () => {
    const { id } = useParams()
    const [result, loading, error] = useMovieShowDetails(id, 'movie')
    const movie = Object.assign(new Movie(), result)

    return (
        <BasePage title={movie.title}>
            {
                loading ? <Spinner className="m-1"/> :
                error ? <p className="alert alert-danger"> { error.message } </p> :
                <MovieTopLevelDetails poster_path={movie.poster_path}
                                      original_title={movie.original_title}
                                      release_date={movie.release_date}
                                      genres={movie.genres
                                        .map(genre => genre.name).join(', ')
                                      }
                                      vote_average={movie.vote_average}
                                      vote_count={movie.vote_count}
                                      overview={movie.overview}
                                      />
            }
        </BasePage>
    )
}

export default MovieDetails;