import { useEffect, useState } from "react"

const useTVShowsList = () => {
    const [shows, setShows] = useState([])
    const [status, setStatus] = useState(false)

    const fetchShows = async () => {
        await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
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