import { useState } from "react"
import { useAlert } from "../context/AlertContext"
import fetchRequest from "../utils/fetchRequest"

const useFavorite = (type, id) => {
    const [favorite, setFavorite] = useState(false)
    const [loading, setLoading] = useState(false)
    const showAlert = useAlert()

    const session_id = localStorage.getItem('tmdb_session_id')
    const url = `${process.env.REACT_APP_TMDB_API_URL}/account/1/favorite?session_id=${session_id}`

    const toggleFavorite = async () => {
        setLoading(true)
        setFavorite(fav => !fav)

        const body = JSON.stringify({
            media_type: type,
            media_id: id,
            favorite: !favorite
        })

        await fetchRequest(url, 'POST', body)
            .then(json => {
                if (!json.success) {
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