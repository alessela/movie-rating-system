const fetchRequest = async (url, method='GET', body=null) => {
    const options = {
        method: method,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`
        },
        body: body
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