import { Spinner } from "react-bootstrap";
import useFavoritesList from "../../hooks/useFavoritesList";
import BasePage from "../BasePage/BasePage";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import TVShowGrid from "../../components/TVShowGrid/TVShowGrid";

const FavoritesPage = ({ type }) => {
  const [favorites, loading] = useFavoritesList(type)

  return (
    <BasePage title={`Favorite ${type === 'movie' ? 'movies' : 'TV shows'}`} screenFit={true}>
      {
          loading ? <Spinner className="m-1"/> : 
          type === 'movie' ? <MovieGrid movies={favorites}/> : <TVShowGrid shows={favorites}/>
      }
    </BasePage>
  )
};

export default FavoritesPage;
