import { useEffect, useState } from "react";
import fetchRequest from "../utils/fetchRequest";

const useDiscoveryList = (type) => {
    const [movies, setMovies] = useState([])
    const [status, setStatus] = useState(false)
    
    useEffect(() => {
        fetchRequest('https://api.themoviedb.org/3/discover/' + type)
            .then(json => {
                setMovies(json.results)
                setStatus(true)
            })
            .catch(() => setStatus(false))
    }, [])
    
    return [movies, status]
}

export default useDiscoveryList;