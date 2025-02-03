import { useState } from "react";
import { Button, Image, Offcanvas } from "react-bootstrap";
import useCurrentUser from "../../hooks/useCurrentUser";
import logoutFromTMDb from "../../auth/logoutFromTMDb";
import { Navigate } from "react-router-dom";
import { useAlert } from "../../context/AlertContext";

const Sidebar = () => {
    const [user, error] = useCurrentUser();
    const avatar_path = user.avatar.tmdb.avatar_path
    const avatar_url = avatar_path == null ? '/logo192.png' : 
        `${process.env.REACT_APP_IMAGE_TMDB_URL}${avatar_path}`
    const [show, setShow] = useState(false)
    const showAlert = useAlert()

    return (
        <>
        {
            error ? <div>{error}</div> : 
            <>
                <Image src={avatar_url} width={38} height={38}
                    roundedCircle
                    onClick={() => setShow(true)}/>
                <Offcanvas className="bg-primary"
                    style={{ width: 300 }} 
                    show={show}
                    onHide={() => setShow(false)}
                    placement="end"
                    >
                    <Offcanvas.Header closeButton className="column-gap-2">
                        <Image src={avatar_url} width={70} roundedCircle />
                        <div>
                            <Offcanvas.Title>{user.name}</Offcanvas.Title>
                            {user.username}
                        </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Button variant='primary'
                            className='me-2'
                            onClick={() => logoutFromTMDb()
                                .then(() => Navigate('/login'))
                                .catch(err => showAlert(err.message, 'danger') )}>
                        Logout
                    </Button>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        }
        </>
    )
}

export default Sidebar;