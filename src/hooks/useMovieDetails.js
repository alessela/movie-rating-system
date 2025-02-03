import { useCallback, useEffect, useState } from "react"
import fetchRequest from "../utils/fetchRequest"
import { Movie } from "../models/Movie"
import { useAlert } from "../context/AlertContext"

const useMovieDetails = (id) => {
    const [movie, setResult] = useState(Movie)
    const [loading, setLoading] = useState(true)
    const url = `${process.env.REACT_APP_TMDB_API_URL}/movie/${id}`
    const showAlert = useAlert()

    const fetchMovie = useCallback(async () => {
        await fetchRequest(url).then(setResult)
            .catch(err => {
                setResult(null)
                showAlert(err.message, 'danger')
            })
            .finally(() => setLoading(false))
    }, [url])

    useEffect(() => {
        fetchMovie()
    }, [fetchMovie])

    return {movie, loading}
}

export default useMovieDetails;