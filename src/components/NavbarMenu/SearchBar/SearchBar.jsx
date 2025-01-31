import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('')

    const handleInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    return (
        <Form>
            <InputGroup>
                <Form.Control className="rounded-pill"
                              htmlSize={40}
                              type="text"
                              placeholder="Search movie or TV show"
                              value={searchInput}
                              >
                </Form.Control>
            </InputGroup>
        </Form>
    )
}

export default SearchBar;