import { useEffect, useState } from "react";
import useAddRating from "../../hooks/useAddRating";
import { Spinner } from "react-bootstrap";

const RatingSystem = ({type, id}) => {
  const [stars, setStars] = useState([])
  const { rating, 
    hover, 
    setHover, 
    loading,
    addRating } = useAddRating(type, id)

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
      { loading && <Spinner className="m-1"/> }
    </>
  )
};

export default RatingSystem;
