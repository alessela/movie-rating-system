import { Spinner } from "react-bootstrap";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "./ReviewCard/ReviewCard";

const ReviewsSection = ({type, id}) => {
  const [reviews, loading] = useReviews(type, id)

  return (
  <div className="mt-3 ps-1 pe-1">
    <h3>Comments</h3>
    <div>
    {
      loading ? <Spinner className="m-1" /> :
      <div style={{ maxHeight: 400, overflow: 'auto' }}>
        {
          reviews.map(review => <ReviewCard key={review.id}
                                            author={review.author}
                                            author_details={
                                              {
                                                avatar_path: review.author_details.avatar_path
                                              }
                                            }
                                            content={review.content}
                                            created_at={review.created_at}
                                            updated_at={review.updated_at}
  />)
        }
      </div>
    }
    </div>
  </div>
)};

export default ReviewsSection;
