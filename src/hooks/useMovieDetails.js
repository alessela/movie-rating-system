import { useCallback, useEffect, useState } from "react"
import fetchRequest from "../utils/fetchRequest"
import { Movie } from "../models/Movie"

const useMovieDetails = (id) => {
    const [movie, setResult] = useState(Movie)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const url = `${process.env.REACT_APP_TMDB_API_URL}/movie/${id}`

    const fetchMovie = useCallback(async () => {
        await fetchRequest(url).then(setResult).catch(setError)
            .finally(() => setLoading(false))
    }, [url])

    useEffect(() => {
        fetchMovie()
    }, [fetchMovie])

    return {movie, loading, error}
}

export default useMovieDetails;