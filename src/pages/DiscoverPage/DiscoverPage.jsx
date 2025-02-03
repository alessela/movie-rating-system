import { Spinner } from "react-bootstrap";
import GenreSelect from '../../components/GenreSelect/GenreSelect'
import MovieGrid from '../../components/MovieGrid/MovieGrid'
import TVShowGrid from "../../components/TVShowGrid/TVShowGrid";
import BasePage from "../BasePage/BasePage";
import useDiscoverList from "../../hooks/useDiscoverList";
import { useState } from "react";

const DiscoverPage = ({ type }) => {
    const [genres, setGenres] = useState([])
    const [list, loading] = useDiscoverList(type, genres)

    return (
        <BasePage title={`Discover ${type === 'movie' ? 'movies' : 'TV shows'}`}>
            <GenreSelect type={type} handleSelectGenres={setGenres}/>
            {
                loading ? <Spinner className="m-1"/> : 
                type === 'movie' ? <MovieGrid movies={list}/> : <TVShowGrid shows={list}/>
            }
        </BasePage>
    )
}

export default DiscoverPage;