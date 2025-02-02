import { useState } from "react"
import fetchRequest from "../utils/fetchRequest"

const useAddRating = (type, id) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [status, setStatus] = useState(null)
    
    const session_id = localStorage.getItem('tmdb_session_id')
    const url = `${process.env.REACT_APP_TMDB_API_URL}/${type}/${id}/rating?session_id=${session_id}`

    const addRating = async (selectedRating) => {
        setLoading(true)
        const body = JSON.stringify({"value": selectedRating})

        await fetchRequest(url, 'POST', body)
            .then(json => {
                if (json.success) {
                    setSuccess(true)
                    setRating(selectedRating)
                }
                setStatus(json.status_message)
            })
            .catch(setStatus).finally(() => setLoading(false))
    }

    return { rating,
        hover, 
        setHover, 
        loading, 
        success, 
        status, 
        addRating  }
}

export default useAddRating;