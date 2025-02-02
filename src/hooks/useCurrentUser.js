import { useCallback, useEffect, useState } from "react";
import fetchRequest from "../utils/fetchRequest";
import User from "../models/User";

const useCurrentUser = () => {
    const [error, setError] = useState(null)
    const [user, setUser] = useState(new User())

    const url = `${process.env.REACT_APP_TMDB_API_URL}/account/1?session_id=${localStorage.getItem('tmdb_session_id')}`

    const fetchUser = useCallback(async () => {
        await fetchRequest(url).then(setUser).catch(setError)
    }, [url])

    useEffect(() => {
        fetchUser()
    }, [fetchUser])

    return [Object.assign(new User(), user), error]
}

export default useCurrentUser;