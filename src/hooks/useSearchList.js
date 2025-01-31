import { useEffect, useState } from "react"
import fetchRequest from "../utils/fetchRequest"

const useSearchList = (query, type) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const url = `${process.env.REACT_APP_TMDB_API_URL}/search/${type}?query=${encodeURI(query)}`

    useEffect(() => {
        fetchRequest(url)
            .then(json => {
                setResults(json.results)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [query, type])
    
    return [results, loading, error]
}

export default useSearchList;