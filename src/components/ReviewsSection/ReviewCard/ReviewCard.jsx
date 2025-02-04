import { Card, Image } from "react-bootstrap";
import Review from "../../../models/Review";

const ReviewCard = ( review = Review ) => {
  const avatar = review.author_details?.avatar_path
  const avatar_path = avatar == null ? '/logo192.png' :
    `${process.env.REACT_APP_IMAGE_TMDB_URL}${avatar}`
  const created_at = new Date(review.created_at).toLocaleString()
  const updated_at = new Date(review.updated_at).toLocaleString()

  return (
  <div className="d-flex p-2 mt-2 mb-2 border rounded">
    <Image src={avatar_path} alt={review.author} width={50} height={50} roundedCircle/>
    <div className="ms-2">
      <h6 className="m-0">{review.author}</h6>
      <p className="mb-0">{review.content}</p>
      <p className="small mb-0 text-secondary">Created at {created_at}</p>
      <p className="small mb-0 text-secondary">Updated at {updated_at}</p>
    </div>
  </div>
)};

export default ReviewCard;
