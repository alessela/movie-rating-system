import { Spinner } from "react-bootstrap";
import MovieGrid from "../components/MovieGrid/MovieGrid"
import TVShowGrid from "../components/TVShowGrid/TVShowGrid";
import useDiscoveryList from "../hooks/useDiscoveryList";

const HomePage = () => {
    const [movies, moviesLoading, moviesError] = useDiscoveryList('movie')
    const [shows, showsLoading, showsError] = useDiscoveryList('tv')

    return (
        <div>
            <h1>Discover</h1>
            <h3>Movies</h3>
            {/* <GenreSelect type="movie"/> */}
            {
                moviesLoading ? <Spinner /> : moviesError ? 
                <p className="alert alert-danger">
                    { moviesError.message }
                </p> :
                <MovieGrid movies={movies}/>
            }
            <h3>TV Shows</h3>
            {
                showsLoading ? <Spinner /> : showsError ? 
                <p className="alert alert-danger">
                    { showsError.message }
                </p> :
                <TVShowGrid shows={shows}/>
                
            }
        </div>
    )
}

export default HomePage;