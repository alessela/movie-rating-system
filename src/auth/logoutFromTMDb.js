import fetchRequest from "../utils/fetchRequest"

const logoutFromTMDb = async () => {
    const session_id = localStorage.getItem('tmdb_session_id')
    const url = `${process.env.REACT_APP_TMDB_API_URL}/authentication/session`
    const body = JSON.stringify({session_id: session_id})

    if (session_id) {
        await fetchRequest(url, 'DELETE', body)
            .then(json => {
                if (json.success) {
                    localStorage.removeItem('tmdb_session_id')
                }
            })
    }
}

export default logoutFromTMDb;