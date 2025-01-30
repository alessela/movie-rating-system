import MovieGrid from "../components/MovieGrid/MovieGrid";
import TVShowGrid from "../components/TVShowGrid/TVShowGrid";
import useMoviesList from "../hooks/useMoviesList";
import useTVShowsList from "../hooks/useTVShowsList";

const HomePage = () => {
    const [movies, moviesStatus] = useMoviesList()
    const [shows, showsStatus] = useTVShowsList()

    return (
        <div>
            <h1>Discover</h1>
            <h3>Movies</h3>
            {
                moviesStatus ? <MovieGrid movies={movies}/> :
                <p className="alert alert-danger" role="alert">
                    Error while fetching movies
                </p>
            }
            <h3>TV Shows</h3>
            {
                showsStatus ? <TVShowGrid shows={shows}/> :
                <p className="alert alert-danger" role="alert">
                    Error while fetching TV shows
                </p>
            }
        </div>
    )
}

export default HomePage;