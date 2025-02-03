import { Navbar, NavDropdown } from 'react-bootstrap';
import './BasePage.css'
import Sidebar from '../../components/Sidebar/Sidebar';

const BasePage = ({ title, styles, children }) => {
    const session_id = localStorage.getItem('tmdb_session_id')

    // if (session_id == null) {
    //     window.location.href = '/login'
    // }

    return (
        <>
            <Navbar bg="primary" className="d-flex justify-content-between ps-1 pe-1">
                <img src="/logo192.png" width={38} alt="logo" />
                <div className='d-flex column-gap-3'>
                    <NavDropdown title='Movies' className="text-white">
                        <NavDropdown.Item href={'/movie'}>Discover</NavDropdown.Item>
                        <NavDropdown.Item href={'/movie/search'}>Search</NavDropdown.Item>
                        <NavDropdown.Item href={'/movie/favorites'}>Favorites</NavDropdown.Item>
                        <NavDropdown.Item href={'/movie/rated'}>Rated</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title='TV shows' className="text-white">
                        <NavDropdown.Item href={'/tv'}>Discover</NavDropdown.Item>
                        <NavDropdown.Item href={'/tv/search'}>Search</NavDropdown.Item>
                        <NavDropdown.Item href={'/tv/favorites'}>Favorites</NavDropdown.Item>
                        <NavDropdown.Item href={'/tv/rated'}>Rated</NavDropdown.Item>
                    </NavDropdown>
                </div>
                <Sidebar />
            </Navbar>
            <div className="d-flex flex-column content overflow-auto"
                 style={{ height: 'calc(100vh - 54px)', ...styles }}>
                <h1>{title}</h1>
                { children }
            </div>
        </>
    ) 
}

export default BasePage;