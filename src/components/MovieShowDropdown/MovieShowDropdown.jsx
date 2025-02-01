import { useState } from "react";
import { Dropdown } from "react-bootstrap";

const MovieShowDropdown = ({ handleDisplayType }) => {
    const [label, setLabel] = useState('Movies')

    return (
        <Dropdown className="m-1">
            <Dropdown.Toggle variant="success">{ label }</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => {
                    setLabel('Movies')
                    handleDisplayType('movie')
                }}>Movies</Dropdown.Item>
                <Dropdown.Item onClick={() => {
                    setLabel('TV Shows')
                    handleDisplayType('tv')                    
                }}>TV Shows</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default MovieShowDropdown;