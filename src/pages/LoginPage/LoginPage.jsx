import { Button } from "react-bootstrap";
import { useAlert } from "../../context/AlertContext";
import loginWithTMDb from "../../auth/loginWithTMDb";

const LoginPage = () => {
  const session_id = localStorage.getItem('tmdb_session_id')
  if (session_id) window.location.href = '/'

  const showAlert = useAlert()

  return (
    <div>
      <h1 className="text-center">Login</h1>
      <div className="d-flex" style={{ height: 'calc(100vh - 32px)' }}>
        <Button variant='primary'
                className='m-auto'
                onClick={() => loginWithTMDb()
                  .catch(err => showAlert(err.message, 'danger') )}>
            Login
        </Button>
      </div>
    </div>
  )
};

export default LoginPage;
