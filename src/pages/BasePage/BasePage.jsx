import { Navbar, NavDropdown } from 'react-bootstrap';
import './BasePage.css'
import Sidebar from '../../components/Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

const BasePage = ({ title, screenFit, styles, children }) => {
    const session_id = localStorage.getItem('tmdb_session_id')
    const navigate = useNavigate()

    if (session_id == null) {
        navigate('/login')
    }

    return (
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
                <Sidebar />
            </Navbar>
            <div className="d-flex flex-column content"
                 style={{ height: screenFit ? 'calc(100vh - 54px)' : 'auto', 
                        ...styles}}>
                <h1>{title}</h1>
                { children }
            </div>
        </>
    ) 
}

export default BasePage;