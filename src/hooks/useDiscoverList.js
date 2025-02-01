import { useEffect, useState } from "react";
import fetchRequest from "../utils/fetchRequest";

const useDiscoverList = (type, genres) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const url = `${process.env.REACT_APP_TMDB_API_URL}/discover/${type}?with_genres=${genres.join('|')}`

    const fetchList = async () => {
        await fetchRequest(url)
            .then(json => setResults(json.results))
            .catch(setError)
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchList()
    }, [type, genres])
    
    return [results, loading, error]
}

export default useDiscoverList;