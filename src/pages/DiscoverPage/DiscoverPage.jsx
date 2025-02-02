import { Spinner } from "react-bootstrap";
import GenreSelect from '../../components/GenreSelect/GenreSelect'
import MovieGrid from '../../components/MovieGrid/MovieGrid'
import TVShowGrid from "../../components/TVShowGrid/TVShowGrid";
import BasePage from "../BasePage/BasePage";
import useDiscoverList from "../../hooks/useDiscoverList";
import { useSearchParams } from "react-router-dom";

const DiscoverPage = ({ type }) => {
    const [ searchParams ] = useSearchParams()
    const genreParams = searchParams.get('genres')
    const genres = genreParams ? genreParams.split('|') : []
    const [list, loading, error] = useDiscoverList(type, genres)

    return (
        <BasePage title={`Discover ${type === 'movie' ? 'movies' : 'TV shows'}`} screenFit={true}>
            <GenreSelect type={type} selectedGenres={genres}/>
            {
                loading ? <Spinner className="m-1"/> : 
                error ? <p className="alert alert-danger"> { error.message } </p> :
                type === 'movie' ? <MovieGrid movies={list}/> : <TVShowGrid shows={list}/>
            }
        </BasePage>
    )
}

export default DiscoverPage;