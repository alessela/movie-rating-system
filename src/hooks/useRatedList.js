import { useCallback, useEffect, useState } from "react";
import { useAlert } from "../context/AlertContext";
import fetchRequest from "../utils/fetchRequest";

const useRatedList = (type) => {
    const [rated, setRated] = useState([])
    const [loading, setLoading] = useState(true)
    const showAlert = useAlert()

    const session_id = localStorage.getItem('tmdb_session_id')
    const _type = type === 'movie' ? 'movies' : type
    const url = `${process.env.REACT_APP_TMDB_API_URL}/account/1/rated/${_type}?session_id=${session_id}`

    const fetchRatedList = useCallback(async () => {
        await fetchRequest(url)
            .then(json => setRated(json.results))
            .catch(err => showAlert(err.message, 'danger'))
            .finally(() => setLoading(false))
    }, [url])

    useEffect(() => {
        fetchRatedList()
    }, [fetchRatedList])

    return [rated, loading]
}

export default useRatedList;