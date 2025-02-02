import { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";

const Sidebar = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <Button onClick={() => setShow(true)}>
                <i className="bi bi-list"></i>
            </Button>
            <Offcanvas className="bg-primary"
                   style={{ width: 200}} 
                   show={show}
                   onHide={() => setShow(false)}
                   >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav>
                        <Nav.Link href='/movie'>Movies</Nav.Link>
                        <Nav.Link>Recently viewed</Nav.Link>
                        <Nav.Link>Favorites</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Sidebar;