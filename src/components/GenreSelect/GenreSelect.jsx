import { Button, Row } from "react-bootstrap"
import useGenresList from "../../hooks/useGenresList"
import { useState } from "react"

const GenreSelect = ({ type, handleSelectGenres }) => {
    const [genres, error] = useGenresList(type)
    const [selected, setSelected] = useState([])

    return error ? (
        <p className="alert alert-danger"> { error.message } </p> 
    ) :
    (
        <div className="d-flex mt-2 mb-2">
            <h6 className="m-auto me-2">Genre(s):</h6>
            <Row className="gap-2 m-0 overflow-auto"
                 style={{ maxHeight: 130 }}>
            {
                genres.map(genre => <Button key={genre.id}
                                            className="w-auto border rounded-pill"
                                            variant={
                                                selected.includes(genre.id) ? 
                                                "primary" : "outlined-primary"
                                            }
                                            onClick={() => 
                                                setSelected(
                                                    selected.includes(genre.id) ?
                                                    selected.filter(val => val !== genre.id) :
                                                    selected.concat([genre.id]))
                                            }
                                            > {genre.name}
                                    </Button>)
            }
            </Row>
            <Button className="m-auto"
                    onClick={() => handleSelectGenres(selected)}>
                <i className="bi bi-search"></i>
            </Button>
            
        </div>
    )
}

export default GenreSelect;