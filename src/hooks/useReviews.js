import { useCallback, useEffect, useState } from "react"
import { useAlert } from "../context/AlertContext"
import fetchRequest from "../utils/fetchRequest"
import Review from "../models/Review"

const useReviews = (type, id) => {
    const [reviews, setReviews] = useState([Review].slice(0,0))
    const [loading, setLoading] = useState(true)
    const showAlert = useAlert()

    const url = `${process.env.REACT_APP_TMDB_API_URL}/${type}/${id}/reviews`

    const fetchReviews = useCallback(async () => {
        await fetchRequest(url)
            .then(json => setReviews(json.results))
            .catch(err => showAlert(err.message, 'danger'))
            .finally(() => setLoading(false))
    }, [url])

    useEffect(() => {
        fetchReviews()
    }, [fetchReviews])

    return [reviews, loading]
}

export default useReviews;