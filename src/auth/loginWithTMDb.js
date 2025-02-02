import fetchRequest from "../utils/fetchRequest";

const loginWithTMDb = async () => {
    const url = `${process.env.REACT_APP_TMDB_API_URL}/authentication/token/new`

    await fetchRequest(url)
        .then(json => {
            if (json.success) {
                const requestToken = json.request_token
                window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${window.location.origin}/auth`;
            } else {
                throw new Error('Failed to get request token')
            }
        })
}

export default loginWithTMDb;