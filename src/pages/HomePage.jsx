import MovieGrid from "../components/MovieGrid/MovieGrid"
import TVShowGrid from "../components/TVShowGrid/TVShowGrid";
import useDiscoveryList from "../hooks/useDiscoveryList";

const HomePage = () => {
    const [movies, moviesStatus] = useDiscoveryList('movie')
    const [shows, showsStatus] = useDiscoveryList('tv')

    return (
        <div>
            <h1>Discover</h1>
            <h3>Movies</h3>
            {/* <GenreSelect type="movie"/> */}
            {
                moviesStatus ? <MovieGrid movies={movies}/> :
                <p className="alert alert-danger">
                    Error while fetching movies
                </p>
            }
            <h3>TV Shows</h3>
            {
                showsStatus ? <TVShowGrid shows={shows}/> :
                <p className="alert alert-danger">
                    Error while fetching TV shows
                </p>
            }
        </div>
    )
}

export default HomePage;