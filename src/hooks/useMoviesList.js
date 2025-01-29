import { useEffect, useState } from "react";

const useMoviesList = () => {
    const [movies, setMovies] = useState([])
    const [status, setStatus] = useState(false)

    const fetchMovies = async () => {
        await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(response => response.json())
            .then(json => {
                setMovies(json.results)
                setStatus(true)
            })
            .catch(() => setStatus(false));
    }

    useEffect(() => {
        fetchMovies()
    })

    return [movies, status]
}

export default useMoviesList;