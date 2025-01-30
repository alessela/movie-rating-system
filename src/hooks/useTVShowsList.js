import { useEffect, useState } from "react"

const useTVShowsList = () => {
    const [shows, setShows] = useState([])
    const [status, setStatus] = useState(false)

    const url = 'https://api.themoviedb.org/3/discover/tv'
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`
        }
    }

    const fetchShows = async () => {
        await fetch(url, options)
            .then(response => response.json())
            .then(json => {
                setShows(json.results)
                setStatus(true)
            })
            .catch(() => {setStatus(false)});
    }

    useEffect(() => {
        fetchShows()
    }, [])

    return [shows, status]
}

export default useTVShowsList;