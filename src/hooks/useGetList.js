import { useEffect, useState } from "react"

const useGetList = (url) => {
    const [result, setResult] = useState([])
    const [status, setStatus] = useState([])

    const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`
            }
        }
    
    const fetchList = async () => {
        await fetch(url, options)
            .then(response => response.json())
            .then(json => {
                setResult(json.results)
                setStatus(true)
            })
            .catch(() => setStatus(false));
    }

    useEffect(() => {
        fetchList()
    }, [])

    return [result, status]
}

export default useGetList;