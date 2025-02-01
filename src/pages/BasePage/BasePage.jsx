import { Container, Navbar } from 'react-bootstrap';
import './BasePage.css'
import Sidebar from '../../components/Sidebar/Sidebar';
import SearchBar from '../../components/SearchBar/SearchBar';

const BasePage = ({ title, screenFit, children }) => (
    <>
        <Navbar bg="primary">
            <Sidebar />
            <Container className="justify-content-center">
                <SearchBar />
            </Container>
        </Navbar>
        <div className="d-flex flex-column content"
             style={screenFit ? { height: 'calc(100vh - 56px)' } : {}}>
            <h1>{title}</h1>
            { children }
        </div>
    </>
)

export default BasePage;