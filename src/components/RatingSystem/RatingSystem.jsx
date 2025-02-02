import { useEffect, useState } from "react";

const RatingSystem = () => {
  const [hover, setHover] = useState(0)
  const [rating, setRating] = useState(0)
  const [stars, setStars] = useState([])

  useEffect(() => {
    let hoverStars = []

    for (let i = 0; i < 10; i++) {
      hoverStars.push(
        <i className={`bi bi-star${i < Math.max(hover, rating) ? '-fill' : ''} fs-1 m-1 text-warning`}
           key={i}
         onClick={() => {setRating(i + 1)}}
         onMouseEnter={() => setHover(i + 1)}
         onMouseLeave={() => setHover(0)}
         ></i>
      )
    }

    setStars(hoverStars)

  }, [hover, rating])

  return (
    <div className="d-flex">
      { stars }
    </div>
  )
};

export default RatingSystem;
