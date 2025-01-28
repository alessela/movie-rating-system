import { Nav, Navbar } from "react-bootstrap";

const NavbarMenu = () => {
    return (
        <Navbar bg="primary" variant="dark" className="justify-content-center">
            <Nav>
                <Nav.Link href='/'>Recommended for You</Nav.Link>
                <Nav.Link>Recently viewed</Nav.Link>
                <Nav.Link>Favorites</Nav.Link>
            </Nav>
        </Navbar>
        )
}

export default NavbarMenu;