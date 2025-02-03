import { Spinner } from "react-bootstrap";
import useRecommendations from "../../hooks/useRecommendations";
import MovieGrid from '../MovieGrid/MovieGrid'
import TVShowGrid from "../TVShowGrid/TVShowGrid";

const Recommendations = ({type, id}) => {
  const [list, loading] = useRecommendations(type, id)

  return (
    <div className="mt-3 ps-1 pe-1">
      <h3>Recommendations</h3>
      {
          loading ? <Spinner className="m-1"/> : 
          type === 'movie' ? <MovieGrid movies={list}/> : <TVShowGrid shows={list}/>
      }
    </div>
  )
};

export default Recommendations;
