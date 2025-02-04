import { useCallback, useEffect, useState } from "react"
import fetchRequest from "../utils/fetchRequest"
import { useAlert } from "../context/AlertContext"

const useFetchRating = (type, id) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [loading, setLoading] = useState(false)
    const session_id = localStorage.getItem('tmdb_session_id')
    const showAlert = useAlert()

    const _type = type === 'movie' ? 'movies' : type
    const ratedUrl = `${process.env.REACT_APP_TMDB_API_URL}/account/1/rated/${_type}?session_id=${session_id}`

    const fetchRating = useCallback(async () => {
        setLoading(true)

        await fetchRequest(ratedUrl)
            .then(json => {
                const ratedList = json.results
                if (ratedList) {
                    if (ratedList.some((x) => x.id === id)) {
                        const found = ratedList.filter((x) => x.id === id)[0]
                        setRating(found.rating)
                    }
                    else {
                        setRating(0)
                    }
                }
            })
            .catch(err => showAlert(err.message, 'danger'))
            .finally(() => setLoading(false))
    }, [ratedUrl, id])

    useEffect(() => {
        fetchRating()
    }, [fetchRating])
    
    const url = `${process.env.REACT_APP_TMDB_API_URL}/${type}/${id}/rating?session_id=${session_id}`

    const addRating = async (selectedRating) => {
        setLoading(true)
        const body = JSON.stringify({"value": selectedRating})

        await fetchRequest(url, 'POST', body)
            .then(json => {
                if (json.success) {
                    setRating(selectedRating)
                    showAlert(json.status_message, 'success')
                }
                else {
                    showAlert(json.status_message, 'danger')
                }
            })
            .catch(err => showAlert(err.message, 'danger'))
            .finally(() => setLoading(false))
    }

    const deleteRating = async () => {
        setLoading(true)

        await fetchRequest(url, 'DELETE')
            .then(json => {
                if (json.success) {
                    setRating(0)
                    showAlert(json.status_message, 'success')
                }
                else {
                    showAlert(json.status_message, 'danger')
                }
            })
            .catch(err => showAlert(err.message, 'danger'))
            .finally(() => setLoading(false))
    }

    return { rating,
        hover, 
        setHover, 
        loading,  
        addRating, 
        deleteRating }
}

export default useFetchRating;