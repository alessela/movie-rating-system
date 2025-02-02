import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import loginWithTMDb from '../../auth/loginWithTMDb';

const LoginButton = () => {
  const [error, setError] = useState(null)
  const [alert, setAlert] = useState(false)

  return (
    <>
      <Button variant='secondary'
              onClick={() => loginWithTMDb()
                .catch(err => { setError(err); setAlert(true) })}>
          Login
      </Button>
      <Alert show={alert} variant='danger' dismissible
             onClose={() => setAlert(false)}
             style={{ 
              position: 'fixed',
              top: '56px'
              }}>
        <Alert.Heading>Login failed</Alert.Heading>
          {error ? error.message : ''}
      </Alert>
    </>
  )
};

export default LoginButton;
