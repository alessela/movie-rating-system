import { Container, Navbar } from "react-bootstrap";
import SearchBar from "./SearchBar/SearchBar";
import Sidebar from "../Sidebar/Sidebar";

const NavbarMenu = () => {
    return (
        <Navbar bg="primary">
            <Sidebar />
            <Container className="justify-content-center">
                <SearchBar />
            </Container>
        </Navbar>
        )
}

export default NavbarMenu;