import { useCallback, useEffect, useState } from "react"
import { useAlert } from "../context/AlertContext"
import fetchRequest from "../utils/fetchRequest"

const useFavorite = (type, id) => {
    const [favorite, setFavorite] = useState(false)
    const [loading, setLoading] = useState(false)
    const session_id = localStorage.getItem('tmdb_session_id')
    const showAlert = useAlert()

    const _type = type === 'movie' ? 'movies' : type
    const favoritesUrl = `${process.env.REACT_APP_TMDB_API_URL}/account/1/favorite/${_type}?session_id=${session_id}`

    const fetchFavoriteStatus = useCallback(async () => {
        setLoading(true)

        await fetchRequest(favoritesUrl)
            .then(json => {
                const favorites = json.results
                if (favorites) {
                    setFavorite(favorites.some((x) => x.id === id))
                }
            })
            .catch(err => showAlert(err.message, 'danger'))
            .finally(() => setLoading(false))
    }, [favoritesUrl, id])

    useEffect(() => {
        fetchFavoriteStatus()
    }, [fetchFavoriteStatus])

    const toggleUrl = `${process.env.REACT_APP_TMDB_API_URL}/account/1/favorite?session_id=${session_id}`

    const toggleFavorite = async () => {
        setLoading(true)
        setFavorite(fav => !fav)

        const body = JSON.stringify({
            media_type: type,
            media_id: id,
            favorite: !favorite
        })

        await fetchRequest(toggleUrl, 'POST', body)
            .then(json => {
                if (json.success) {
                    showAlert(json.status_message, 'success')
                }
                else {
                    setFavorite(fav => !fav)
                    showAlert(json.status_message, 'danger')
                }
            })
            .catch(err => {
                setFavorite(fav => !fav)
                showAlert(err.message, 'danger')
            })
            .finally(() => setLoading(false))
    }

    return {favorite, toggleFavorite, loading}
}

export default useFavorite;