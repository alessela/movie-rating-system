import { Card, Image } from "react-bootstrap";
import Review from "../../../models/Review";

const ReviewCard = ( review = Review ) => {
  const avatar = review.author_details?.avatar_path
  const avatar_path = avatar == null ? '/logo192.png' :
    `${process.env.REACT_APP_IMAGE_TMDB_URL}${avatar}`

  return (
  <div className="d-flex p-2 border rounded">
    <Image src={avatar_path} alt={review.author} width={50} height={50} roundedCircle/>
    <div className="ms-2">
      <h6 className="m-0">{review.author}</h6>
      <p className="mb-0">{review.content}</p>
    </div>
  </div>
)};

export default ReviewCard;
