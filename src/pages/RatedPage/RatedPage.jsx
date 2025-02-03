import { Spinner } from "react-bootstrap";
import useRatedList from "../../hooks/useRatedList";
import BasePage from "../BasePage/BasePage";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import TVShowGrid from "../../components/TVShowGrid/TVShowGrid";

const RatedPage = ({ type }) => {
  const [favorites, loading] = useRatedList(type)

  return (
  <BasePage title={`Rated ${type === 'movie' ? 'movies' : 'TV shows'}`}>
    {
      loading ? <Spinner className="m-1"/> :
      type === 'movie' ? <MovieGrid movies={favorites}/> : <TVShowGrid shows={favorites}/>
    }
  </BasePage>
)};

export default RatedPage;
