import { useEffect, useState } from "react";
import fetchRequest from "../utils/fetchRequest";

const useDiscoverList = (type, genres) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchRequest(`https://api.themoviedb.org/3/discover/${type}?with_genres=${genres.join('|')}`)
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