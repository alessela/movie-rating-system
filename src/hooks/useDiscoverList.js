import { useEffect, useState } from "react";
import fetchRequest from "../utils/fetchRequest";

const useDiscoverList = (type, genres) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const url = `${process.env.REACT_APP_TMDB_API_URL}/discover/${type}?with_genres=${genres.join('|')}`

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
    }, [type, genres])
    
    return [results, loading, error]
}

export default useDiscoverList;