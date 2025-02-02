import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css"

const SearchBar = ({type, initialQuery}) => {
    const [query, setQuery] = useState(initialQuery)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const trimmed = query.trim()
        if (trimmed)
            navigate(`/${type}/search?query=` + encodeURI(trimmed))
    }

    return (
        <Form onSubmit={handleSubmit} >
            <InputGroup className="search-bar m-auto mb-1">
                <Form.Control id="queryInput"
                            className="rounded"
                            type="text"
                            placeholder="Search something to watch"
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