import { useState } from "react";
import { Image, Offcanvas } from "react-bootstrap";
import useCurrentUser from "../../hooks/useCurrentUser";
import LogoutButton from "./LogoutButton/LogoutButton";

const Sidebar = () => {
    const [user, error] = useCurrentUser();
    const avatar_path = user.avatar.tmdb.avatar_path
    const avatar_url = avatar_path == null ? '/logo192.png' : 
        `${process.env.REACT_APP_IMAGE_TMDB_URL}${avatar_path}`
    const [show, setShow] = useState(false)

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
                        <LogoutButton />
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        }
        </>
    )
}

export default Sidebar;