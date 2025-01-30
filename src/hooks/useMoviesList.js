import { useEffect, useState } from "react";

const useMoviesList = () => {
    const [movies, setMovies] = useState([])
    const [status, setStatus] = useState(false)

    const url = 'https://api.themoviedb.org/3/discover/movie'
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`
        }
    }

    const fetchMovies = async () => {
        await fetch(url, options)
            .then(response => response.json())
            .then(json => {
                setMovies(json.results)
                setStatus(true)
            })
            .catch(() => setStatus(false));
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return [movies, status]
}

export default useMoviesList;