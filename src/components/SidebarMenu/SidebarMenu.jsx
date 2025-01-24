import { Nav } from "react-bootstrap";

const SidebarMenu = () => {
    return (<Nav className="flex-column">
        <Nav.Link href='/'>Recommended for You</Nav.Link>
        <Nav.Link>Recently viewed</Nav.Link>
        <Nav.Link>Favorites</Nav.Link>
    </Nav>)
}

export default SidebarMenu;