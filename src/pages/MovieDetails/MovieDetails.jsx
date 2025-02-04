import { useParams } from "react-router-dom";
import BasePage from "../BasePage/BasePage";
import useMovieDetails from "../../hooks/useMovieDetails";
import { Spinner} from "react-bootstrap";
import MovieTopLevelDetails from "../../components/MovieTopLevelDetails/MovieTopLevelDetails";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
import Recommendations from "../../components/Recommendations/Recommendations";

const MovieDetails = () => {
    const { id } = useParams()
    const {movie, loading} = useMovieDetails(id)
    const release_date = new Date(movie.release_date).toLocaleDateString()

    let title = movie ? movie.title : ''
    if (movie && movie.original_title !== movie.title) {
        title += ` (${movie.original_title})`
    }

    return (
        <BasePage title={ title } key={id}>
            {
                loading ? <Spinner className="m-1"/> :
                movie && (
                    <>
                    <MovieTopLevelDetails id={movie.id}
                        poster_path={movie.poster_path}
                        release_date={release_date}
                        genres={movie.genres
                          .map(genre => genre.name).join(', ')
                        }
                        vote_average={movie.vote_average}
                        vote_count={movie.vote_count}
                        overview={movie.overview}
                        />
                    <ReviewsSection type='movie' id={movie.id}/>
                    <Recommendations type='movie' id={movie.id}/>
                    </>
                    )
                
            }
        </BasePage>
    )
}

export default MovieDetails;