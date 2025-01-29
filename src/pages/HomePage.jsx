import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import TVShowGrid from "../components/TVShowGrid/TVShowGrid";

const HomePage = () => {
    const [movies, setMovies] = useState([])
    const [shows, setShows] = useState([])

    const fetchMovies = async () => {
        try {
            await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
                .then(response => response.json())
                .then(json => setMovies(json.results));
        } catch (err) {
            console.error(err);
        }
    }

    const fetchShows = async () => {
        try {
            await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
                .then(response => response.json())
                .then(json => setShows(json.results));
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchMovies()
        fetchShows()
    }, [])

    return (
        <div>
            <h1>Recommended for You</h1>
            <h3>Movies</h3>
            <MovieGrid movies={movies} />
            <h3>TV Shows</h3>
            <TVShowGrid shows={shows}/>
        </div>
    )
}

export default HomePage;