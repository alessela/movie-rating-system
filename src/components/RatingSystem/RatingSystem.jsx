import { useEffect, useState } from "react";
import useFetchRating from "../../hooks/useRating";
import { Spinner } from "react-bootstrap";

const RatingSystem = ({type, id}) => {
  const [stars, setStars] = useState([])

  const { rating, 
    hover, 
    setHover, 
    loading,
    addRating,
    deleteRating } = useFetchRating(type, id)

  useEffect(() => {
    let hoverStars = []

    for (let i = 0; i < 10; i++) {
      hoverStars.push(
        <i className={`bi bi-star${i < Math.max(hover, rating) ? '-fill' : ''} fs-2 text-warning`}
           key={i}
         onClick={() => {addRating(i + 1)}}
         onMouseEnter={() => setHover(i + 1)}
         onMouseLeave={() => setHover(0)}
         ></i>
      )
    }

    setStars(hoverStars)

  }, [hover, rating])

  return (
    <>
      <div className="d-flex">
        { stars }
      </div>
      {
        rating > 0 ?
          <div className="d-flex">
          <i className="bi bi-x-lg fs-2"
            onClick={deleteRating}>
            Clear rating
          </i>
        </div> : <></>
      }
      
      { loading && <Spinner className="m-1"/> }
    </>
  )
};

export default RatingSystem;
