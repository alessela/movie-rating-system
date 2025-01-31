import { useEffect, useState } from "react";
import fetchRequest from "../utils/fetchRequest";
import Genre from '../models/Genre'

const useGenresList = (type) => {
    const [genres, setGenres] = useState([new Genre()].slice(0, 0))
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchRequest(`https://api.themoviedb.org/3/genre/${type}/list`)
            .then(json => setGenres(json.genres)).catch(setError)
    }, [])

    return [genres, error]
}

export default useGenresList;