import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/search?query=' + encodeURI(query))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Form.Control className="rounded-pill"
                              htmlSize={40}
                              type="text"
                              placeholder="Search movie or TV show"
                              value={query}
                              onChange={(e) => setQuery(e.target.value)}
                              />
                <Button type="submit">
                    <i className="bi bi-search"></i>
                </Button>
            </InputGroup>
        </Form>
    )
}

export default SearchBar;