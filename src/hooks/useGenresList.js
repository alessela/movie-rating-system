import { useEffect, useState } from "react";
import fetchRequest from "../utils/fetchRequest";
import Genre from '../models/Genre'

const useGenresList = (type) => {
    const [genres, setGenres] = useState([new Genre()].slice(0, 0))
    const [error, setError] = useState(null)

    const url = `${process.env.REACT_APP_TMDB_API_URL}/genre/${type}/list`

    const fetchGenres = async () => {
        await fetchRequest(url)
            .then(json => setGenres(json.genres))
            .catch(setError)
    }

    useEffect(() => {
        fetchGenres()
    }, [type])

    return [genres, error]
}

export default useGenresList;