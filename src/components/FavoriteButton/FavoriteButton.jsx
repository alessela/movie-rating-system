import { Spinner } from "react-bootstrap";
import useFavorite from "../../hooks/useFavorite";

const FavoriteButton = ({type, id}) => {
  const { favorite, toggleFavorite, loading } = useFavorite(type, id)

  return (
    <>
    {
      loading ? <Spinner className="m-1"/> :
      <i className={`bi bi-heart${favorite ? '-fill' : ''} fs-2 text-danger`} 
          onClick={toggleFavorite}
          />
    }
    </>
    
  )
};

export default FavoriteButton;
