import { useState } from "react";
import { Spinner } from "react-bootstrap";
import GenreSelect from '../components/GenreSelect/GenreSelect'
import MovieGrid from '../components/MovieGrid/MovieGrid'
import useDiscoverList from "../hooks/useDiscoverList";
import TVShowGrid from "../components/TVShowGrid/TVShowGrid";

const HomePage = () => {
    const [movieGenres, setMovieGenres] = useState([])
    const [showGenres, setShowGenres] = useState([])
    const [movies, moviesLoading, moviesError] = useDiscoverList('movie', movieGenres)
    const [shows, showsLoading, showsError] = useDiscoverList('tv', showGenres)

    return (
        <div>
            <h1>Discover</h1>
            <h3>Movies</h3>
            <GenreSelect type="movie"
                         handleSelectGenres={setMovieGenres}/>
            {
                moviesLoading ? <Spinner /> : moviesError ? 
                <p className="alert alert-danger"> { moviesError.message } </p> :
                <MovieGrid movies={movies}/>
            }
            <h3>TV Shows</h3>
            <GenreSelect type="tv"
                         handleSelectGenres={setShowGenres}/>
            {
                showsLoading ? <Spinner /> : showsError ? 
                <p className="alert alert-danger"> { showsError.message } </p> :
                <TVShowGrid shows={shows}/>           
            }
        </div>
    )
}

export default HomePage;