import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import fetchRequest from "../../utils/fetchRequest";
import BasePage from "../BasePage/BasePage";
import { Spinner } from "react-bootstrap";

const AuthRedirect = () => {
  const navigate = useNavigate()
  const [ searchParams ] = useSearchParams()

  const requestToken = searchParams.get('request_token')
  const body = JSON.stringify({ request_token: requestToken})
  const url = `${process.env.REACT_APP_TMDB_API_URL}/authentication/session/new`

  const [error, setError] = useState(null)
  
  const createSession = useCallback(async () => {
    await fetchRequest(url, 'POST', body)
      .then(json => {
        if (json.success) {
          localStorage.setItem('tmdb_session_id', json.session_id);
          navigate('/')
        }
      })
      .catch(setError)
  }, [url, body, navigate])

  useEffect(() => {
    createSession()
  }, [createSession])

  return (
    <BasePage title="Authenticating...">
      {
        error ? <p className="alert alert-danger"> 
          { error.message } <Link to='/'>Go back to the main page</Link>
        
        </p> :
        <Spinner className="m-1"/>
      }
    </BasePage>
  );
}

export default AuthRedirect;
