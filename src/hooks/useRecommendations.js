import { useCallback, useEffect, useState } from "react"
import { useAlert } from "../context/AlertContext"
import fetchRequest from "../utils/fetchRequest"

const useRecommendations = (type, id) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const showAlert = useAlert()

    const url = `${process.env.REACT_APP_TMDB_API_URL}/${type}/${id}/recommendations`

    const fetchList = useCallback(async () => {
        await fetchRequest(url)
            .then(json => setResults(json.results))
            .catch(err => showAlert(err.message, 'danger'))
            .finally(() => setLoading(false))
    }, [url])

    useEffect(() => {
        fetchList()
    }, [fetchList])
    
    return [results, loading]
}

export default useRecommendations;