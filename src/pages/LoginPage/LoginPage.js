import LoginButton from "../../components/LoginButton/LoginButton";

const LoginPage = () => {
  const session_id = localStorage.getItem('tmdb_session_id')
  console.log(session_id)
  if (session_id) window.location.href = '/'

  return (
    <div>
      <h1 className="text-center">Login</h1>
      <div className="d-flex" style={{ height: 'calc(100vh - 32px)' }}>
        <LoginButton />
      </div>
    </div>
  )
};

export default LoginPage;
