import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid";

const HomePage = () => {
    const [movies, setMovies] = useState([])

    async function fetchMovies() {
        try {
            await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
                .then(response => response.json())
                .then(json => setMovies(json.results));
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <div>
            <h1>Recommended for You</h1>
            <h3>Movies</h3>
            <MovieGrid movies={movies} />
        </div>
    )
}

export default HomePage;