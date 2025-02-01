const fetchRequest = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`
        }
    }

    return await fetch(url, options).then(async response => {
            const json = await response.json()
            
            if (!response.ok) {
                throw new Error(json.status_message)
            }
            return json
        })
}

export default fetchRequest;