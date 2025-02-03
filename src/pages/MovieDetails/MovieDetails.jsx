import { useParams } from "react-router-dom";
import BasePage from "../BasePage/BasePage";
import useMovieDetails from "../../hooks/useMovieDetails";
import { Spinner} from "react-bootstrap";
import MovieTopLevelDetails from "../../components/MovieTopLevelDetails/MovieTopLevelDetails";

const MovieDetails = () => {
    const { id } = useParams()
    const {movie, loading} = useMovieDetails(id)

    return (
        <BasePage title={movie && movie.title}>
            {
                loading ? <Spinner className="m-1"/> :
                movie &&
                <MovieTopLevelDetails id={movie.id}
                                      poster_path={movie.poster_path}
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