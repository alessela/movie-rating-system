import { useSearchParams } from "react-router-dom";
import BasePage from "../BasePage/BasePage";
import useSearchList from "../../hooks/useSearchList";
import { Spinner } from "react-bootstrap";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import TVShowGrid from "../../components/TVShowGrid/TVShowGrid";
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchResults = ({ type }) => {
    const [ searchParams ] = useSearchParams()
    const query = searchParams.get('query') ?? ''

    const [list, loading, error] = useSearchList(query, type)

    return (
        <BasePage title={`Search ${type === 'movie' ? 'movies' : 'TV shows'}`}
                  styles={{ overflow: 'auto' }}>
            <SearchBar type={type}/>
            { query !== ''? <h3>Search results</h3> : <></> }
            {
                query === '' ? <></> :
                loading ? <Spinner /> : 
                error ? <p className="alert alert-danger"> { error.message } </p> :
                type === 'movie' ? <MovieGrid movies={list}/> : <TVShowGrid shows={list}/>
            }
        </BasePage>
    )
}

export default SearchResults;