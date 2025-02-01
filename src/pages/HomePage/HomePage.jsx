import { useState } from "react";
import { Spinner } from "react-bootstrap";
import GenreSelect from '../../components/GenreSelect/GenreSelect'
import MovieGrid from '../../components/MovieGrid/MovieGrid'
import useDiscoverList from "../../hooks/useDiscoverList";
import TVShowGrid from "../../components/TVShowGrid/TVShowGrid";
import MovieShowDropdown from "../../components/MovieShowDropdown/MovieShowDropdown";
import BasePage from "../BasePage/BasePage";

const HomePage = () => {
    const [type, setType] = useState('movie')
    const [genres, setGenres] = useState([])
    const [list, loading, error] = useDiscoverList(type, genres)

    return (
        <BasePage title="Discover" screenFit={true}>
            <MovieShowDropdown handleDisplayType={setType}/>
            <GenreSelect type={type} handleSelectGenres={setGenres}/>
            {
                loading ? <Spinner className="m-1"/> : 
                error ? <p className="alert alert-danger"> { error.message } </p> :
                type === 'movie' ? <MovieGrid movies={list}/> : <TVShowGrid shows={list}/>
            }
        </BasePage>
    )
}

export default HomePage;