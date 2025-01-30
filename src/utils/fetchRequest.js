const fetchRequest = (url) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`
        }
    }

    return fetch(url, options).then(response => response.json())
}

export default fetchRequest;