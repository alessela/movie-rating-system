import { useState } from "react"
import fetchRequest from "../utils/fetchRequest"
import { useAlert } from "../context/AlertContext"

const useAddRating = (type, id) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [loading, setLoading] = useState(false)
    const showAlert = useAlert()
    
    const session_id = localStorage.getItem('tmdb_session_id')
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

    return { rating,
        hover, 
        setHover, 
        loading,  
        addRating  }
}

export default useAddRating;