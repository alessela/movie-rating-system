import React from 'react';
import { useParams } from 'react-router-dom';
import useMovieShowDetails from '../../hooks/useMovieShowDetails';
import TVShow from '../../models/TVShow'
import BasePage from '../BasePage/BasePage';
import { Spinner } from 'react-bootstrap';
import TVShowTopLevelDetails from '../../components/TVShowTopLevelDetails/TVShowTopLevelDetails';

const TVShowDetails = () => {
  const { id } = useParams()
  const [result, loading, error] = useMovieShowDetails(id, 'tv')
  const show = Object.assign(new TVShow(), result)

  return (
    <BasePage title={show.name}>
      {
        loading ? <Spinner className="m-1"/> :
        error ? <p className="alert alert-danger"> { error.message } </p> :
        <TVShowTopLevelDetails poster_path={show.poster_path}
                               original_name={show.original_name}
                               first_air_date={show.first_air_date}
                               last_air_date={show.last_air_date}
                               genres={show.genres
                                  .map(genre => genre.name).join(', ')
                                }
                                vote_average={show.vote_average}
                                vote_count={show.vote_count}
                                overview={show.overview}
                               />
      }
    </BasePage>
  )
};

export default TVShowDetails;
