import { useCallback, useEffect, useState } from "react"
import fetchRequest from "../utils/fetchRequest"
import Movie from "../models/Movie"

const useMovieDetails = (id) => {
    const [result, setResult] = useState(new Movie())

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

    return [result, loading, error]
}

export default useMovieDetails;