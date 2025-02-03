import { useCallback, useEffect, useState } from "react"
import fetchRequest from "../utils/fetchRequest"
import { useAlert } from "../context/AlertContext"

const useSearchList = (query, type) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const showAlert = useAlert()

    const url = `${process.env.REACT_APP_TMDB_API_URL}/search/${type}?query=${encodeURI(query)}`

    const fetchSearchList = useCallback(async () => {
        await fetchRequest(url)
            .then(json => setResults(json.results))
            .catch(err => showAlert(err.message, 'danger'))
            .finally(() => setLoading(false))
    }, [url])

    useEffect(() => {
        fetchSearchList()
    }, [fetchSearchList])
    
    return [results, loading]
}

export default useSearchList;