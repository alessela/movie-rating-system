import { useParams } from 'react-router-dom';
import BasePage from '../BasePage/BasePage';
import { Spinner } from 'react-bootstrap';
import TVShowTopLevelDetails from '../../components/TVShowTopLevelDetails/TVShowTopLevelDetails';
import useTVShowDetails from '../../hooks/useTVShowDetails';
import ReviewsSection from '../../components/ReviewsSection/ReviewsSection';
import Recommendations from '../../components/Recommendations/Recommendations';

const TVShowDetails = () => {
  const { id } = useParams()
  const {show, loading} = useTVShowDetails(id)
  const first_air_date = new Date(show.first_air_date).toLocaleDateString()
  const last_air_date = new Date(show.last_air_date).toLocaleDateString()

  let title = show ? show.name : ''
    if (show && show.original_name !== show.name) {
        title += ` (${show.original_name})`
    }

  return (
    <BasePage title={title} key={id}>
      {
        loading ? <Spinner className="m-1"/> :
        show && (
          <>
          <TVShowTopLevelDetails id={show.id}
                               poster_path={show.poster_path}
                               first_air_date={first_air_date}
                               last_air_date={last_air_date}
                               genres={show.genres
                                  .map(genre => genre.name).join(', ')
                                }
                                vote_average={show.vote_average}
                                vote_count={show.vote_count}
                                overview={show.overview}
                               />
          <ReviewsSection type="tv" id={show.id}/>
          <Recommendations type="tv" id={show.id}/>
          </>
          )
      }
    </BasePage>
  )
};

export default TVShowDetails;
