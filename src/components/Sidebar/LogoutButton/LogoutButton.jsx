import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import logoutFromTMDb from "../../../auth/logoutFromTMDb";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const [error, setError] = useState(null)
  const [alert, setAlert] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <Button variant='primary'
              className='me-2'
              onClick={() => logoutFromTMDb()
                .then(() => navigate('/login'))
                .catch(err => { setError(err); setAlert(true) })}>
          Logout
      </Button>
      <Alert show={alert} variant='danger' dismissible
             onClose={() => setAlert(false)}
             style={{ 
              position: 'fixed',
              top: '54px'
              }}>
        <Alert.Heading>Login failed</Alert.Heading>
          {error ? error.message : ''}
      </Alert>
    </>
  )
};

export default LogoutButton;
