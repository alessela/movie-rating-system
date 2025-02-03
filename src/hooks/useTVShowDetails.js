import { useCallback, useEffect, useState } from "react"
import fetchRequest from "../utils/fetchRequest"
import { TVShow } from "../models/TVShow"
import { useAlert } from "../context/AlertContext"

const useTVShowDetails = (id) => {
    const [show, setShow] = useState(TVShow)
    const [loading, setLoading] = useState(true)
    const url = `${process.env.REACT_APP_TMDB_API_URL}/tv/${id}`
    const showAlert = useAlert()

    const fetchTVShow = useCallback(async () => {
        await fetchRequest(url).then(setShow)
            .catch(err => {
                setShow(null)
                showAlert(err.message, 'danger')
            })
            .finally(() => setLoading(false))
    }, [url])

    useEffect(() => {
        fetchTVShow()
    }, [fetchTVShow])

    return {show, loading}
}

export default useTVShowDetails;