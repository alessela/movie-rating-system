import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Movie from "../models/Movie";
import MovieGridItem from "../components/MovieGridItem/MovieGridItem";

const HomePage = () => {
    const [movies, setMovies] = useState(new Array(new Movie()))

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
        <Container>
            <h1>Recommended for You</h1>
            {
                movies.map((movie, index) => <MovieGridItem key={index}
                                                            id={movie.id}
                                                            title={movie.title}
                                                            poster_path={movie.poster_path}
                                                            release_date={movie.release_date}
                                                            genre_ids={movie.genre_ids}/>)
            }
        </Container>
    )
}

export default HomePage;