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
        <div style={{ display: 'flex', margin: '8px 8px 16px 8px'}}>
            <h6 style={{ marginRight: 8 }}>Genre(s):</h6>
            <Row className="gap-2"
                 style={{ margin: 0, maxHeight: 176, overflowY: 'auto' }}>
            {
                genres.map(genre => <Button key={genre.id}
                                            className="w-auto"
                                            variant={
                                                selected.includes(genre.id) ? 
                                                "primary" : "secondary"
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
            <Button style={{ margin: 'auto'}}
                    onClick={() => handleSelectGenres(selected)}>
                <i className="bi bi-search"></i>
            </Button>
            
        </div>
    )
}

export default GenreSelect;