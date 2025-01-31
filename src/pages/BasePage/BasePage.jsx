import { Container, Navbar } from 'react-bootstrap';
import './BasePage.css'
import Sidebar from '../../components/Sidebar/Sidebar';
import SearchBar from '../../components/SearchBar/SearchBar';

const BasePage = ({ title, children }) => (
    <>
        <Navbar bg="primary">
            <Sidebar />
            <Container className="justify-content-center">
                <SearchBar />
            </Container>
        </Navbar>
        <div className="content d-flex flex-column">
            <h1>{title}</h1>
            { children }
        </div>
    </>
)

export default BasePage;