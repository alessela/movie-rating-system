import { Container, Navbar } from 'react-bootstrap';
import './BasePage.css'
import Sidebar from '../../components/Sidebar/Sidebar';
import SearchBar from '../../components/SearchBar/SearchBar';

const BasePage = ({ title, screenFit, styles, children }) => (
    <>
        <Navbar bg="primary">
            <Sidebar />
            <Container className="justify-content-center">
                <SearchBar />
            </Container>
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