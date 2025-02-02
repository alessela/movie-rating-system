import { Navbar, NavDropdown } from 'react-bootstrap';
import './BasePage.css'
import LoginButton from '../../components/LoginButton/LoginButton';
import UserInfo from '../../components/UserInfo/UserInfo';

const BasePage = ({ title, screenFit, styles, children }) => (
    <>
        <Navbar bg="primary" className="d-flex justify-content-between ps-1 pe-1">
            <img src="/logo192.png" width={38} />
            <div className='d-flex column-gap-3'>
                <NavDropdown title='Movies' className="text-white">
                    <NavDropdown.Item href={'/movie'}>Discover</NavDropdown.Item>
                    <NavDropdown.Item href={'/movie/search'}>Search</NavDropdown.Item>
                    <NavDropdown.Item>Favorites</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='TV shows' className="text-white">
                    <NavDropdown.Item href={'/tv'}>Discover</NavDropdown.Item>
                    <NavDropdown.Item href={'/tv/search'}>Search</NavDropdown.Item>
                    <NavDropdown.Item>Favorites</NavDropdown.Item>
                </NavDropdown>
            </div>
            {
                localStorage.getItem('tmdb_session_id') ?
                <UserInfo /> : <LoginButton />
            }
        </Navbar>
        <div className="d-flex flex-column content"
             style={{ height: screenFit ? 'calc(100vh - 54px)' : 'auto', 
                    ...styles}}>
            <h1>{title}</h1>
            { children }
        </div>
    </>
)

export default BasePage;