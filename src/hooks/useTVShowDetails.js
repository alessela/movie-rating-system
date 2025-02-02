import { useCallback, useEffect, useState } from "react"
import fetchRequest from "../utils/fetchRequest"
import { TVShow } from "../models/TVShow"

const useTVShowDetails = (id) => {
    const [show, setResult] = useState(TVShow)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const url = `${process.env.REACT_APP_TMDB_API_URL}/tv/${id}`

    const fetchTVShow = useCallback(async () => {
        await fetchRequest(url).then(setResult).catch(setError)
            .finally(() => setLoading(false))
    }, [url])

    useEffect(() => {
        fetchTVShow()
    }, [fetchTVShow])

    return [show, loading, error]
}

export default useTVShowDetails;