import { Navbar } from 'react-bootstrap';
import './BasePage.css'
import Sidebar from '../../components/Sidebar/Sidebar';
import SearchBar from '../../components/SearchBar/SearchBar';
import LoginButton from '../../components/LoginButton/LoginButton';
import UserInfo from '../../components/UserInfo/UserInfo';

const BasePage = ({ title, screenFit, styles, children }) => (
    <>
        <Navbar bg="primary" className="d-flex justify-content-between">
            <Sidebar />
            <SearchBar />
            {
                localStorage.getItem('tmdb_session_id') ?
                <UserInfo /> : <LoginButton />
            }
        </Navbar>
        <div className="d-flex flex-column content"
             style={{ height: screenFit ? 'calc(100vh - 56px)' : 'auto', 
                    ...styles}}>
            <h1>{title}</h1>
            { children }
        </div>
    </>
)

export default BasePage;