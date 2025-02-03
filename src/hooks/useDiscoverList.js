import { useCallback, useEffect, useState } from "react";
import fetchRequest from "../utils/fetchRequest";
import { useAlert } from "../context/AlertContext";

const useDiscoverList = (type, genres) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const showAlert = useAlert()

    const url = `${process.env.REACT_APP_TMDB_API_URL}/discover/${type}?with_genres=${genres.join('|')}`

    const fetchList = useCallback(async () => {
        await fetchRequest(url)
            .then(json => setResults(json.results))
            .catch(err => showAlert(err.message, 'danger'))
            .finally(() => setLoading(false))
    }, [url, showAlert])

    useEffect(() => {
        fetchList()
    }, [fetchList])
    
    return [results, loading]
}

export default useDiscoverList;