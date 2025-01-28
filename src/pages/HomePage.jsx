import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const HomePage = () => {
    const [movies, setMovies] = useState([])

    const fetchMovies = async () => {
        try {
            await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
                .then(response => response.json())
                .then(json => setMovies(json.results))
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <Container>
            <h1>Recommended for You</h1>
            {
                movies.map((movie) => (
                    <img src={`${process.env.REACT_APP_IMAGE_TMDB_URL}${movie.poster_path}`} />
                ))
            }
        </Container>
    )
}

export default HomePage;