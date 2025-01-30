import { useEffect, useState } from "react";
import fetchRequest from "../utils/fetchRequest";

const useDiscoveryList = (type) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchRequest('https://api.themoviedb.org/3/discover/' + type)
            .then(json => {
                setMovies(json.results)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [])
    
    return [movies, loading, error]
}

export default useDiscoveryList;