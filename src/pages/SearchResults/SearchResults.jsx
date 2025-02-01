import { useSearchParams } from "react-router-dom";
import BasePage from "../BasePage/BasePage";
import { useState } from "react";
import useSearchList from "../../hooks/useSearchList";
import MovieShowDropdown from "../../components/MovieShowDropdown/MovieShowDropdown";
import { Spinner } from "react-bootstrap";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import TVShowGrid from "../../components/TVShowGrid/TVShowGrid";

const SearchResults = () => {
    const [ searchParams ] = useSearchParams()
    const query = searchParams.get('query')

    const [type, setType] = useState('movie')
    const [list, loading, error] = useSearchList(query, type)

    return (
        <BasePage title={`Search results for "${query}"`} screenFit={true}>
            <MovieShowDropdown handleDisplayType={setType}/>
            {
                loading ? <Spinner /> : 
                error ? <p className="alert alert-danger"> { error.message } </p> :
                type === 'movie' ? <MovieGrid movies={list}/> : <TVShowGrid shows={list}/>
            }
        </BasePage>
    )
}

export default SearchResults;