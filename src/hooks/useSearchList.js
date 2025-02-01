import { useCallback, useEffect, useState } from "react"
import fetchRequest from "../utils/fetchRequest"

const useSearchList = (query, type) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const url = `${process.env.REACT_APP_TMDB_API_URL}/search/${type}?query=${encodeURI(query)}`

    const fetchList = useCallback(async () => {
        await fetchRequest(url)
            .then(json => setResults(json.results))
            .catch(setError)
            .finally(() => setLoading(false))
    }, [url])

    useEffect(() => {
        fetchList()
    }, [fetchList])
    
    return [results, loading, error]
}

export default useSearchList;