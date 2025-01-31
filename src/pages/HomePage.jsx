import { useState } from "react";
import { Spinner } from "react-bootstrap";
import GenreSelect from '../components/GenreSelect/GenreSelect'
import MovieGrid from '../components/MovieGrid/MovieGrid'
import useDiscoverList from "../hooks/useDiscoverList";
import TVShowGrid from "../components/TVShowGrid/TVShowGrid";
import MovieShowDropdown from "../components/MovieShowDropdown/MovieShowDropdown";

const HomePage = () => {
    const [type, setType] = useState('movie')
    const [genres, setGenres] = useState([])
    const [list, loading, error] = useDiscoverList(type, genres)

    return (
        <div>
            <h1>Discover</h1>
            <MovieShowDropdown handleDisplayType={setType}/>

            <h3>{ type === 'movie' ? 'Movies' : 'TV Shows'}</h3>
            <GenreSelect type={type} handleSelectGenres={setGenres}/>
            {
                loading ? <Spinner /> : 
                error ? <p className="alert alert-danger"> { error.message } </p> :
                type === 'movie' ? <MovieGrid movies={list}/> : <TVShowGrid shows={list}/>
            }
        </div>
    )
}

export default HomePage;