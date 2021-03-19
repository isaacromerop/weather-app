import { IconPlus, Wrapper } from "./Reviews.style";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const Reviews = () => {
  return (
    <Wrapper>
      <div className="reviewers">
        <div className="icon">
          <IconPlus />
        </div>
        <div className="text">
          <p>Top Reviews</p>
        </div>
        <div className="pictures">
          <span>
            <img src="/assets/images/review1.jpg" alt="r-1" />
          </span>
          <span>
            <img src="/assets/images/review2.jpg" alt="r-2" />
          </span>
          <span>
            <img src="/assets/images/review3.jpg" alt="r-3" />
          </span>
          <div>9+</div>
        </div>
      </div>
      <div className="place">
        <PlaceDetails place="Art Science" location="Musseum" margin={0} />
      </div>
      <div className="location">
        <PlaceDetails place="Fountain" location="Of Health" margin={0} />
        <div className="plus-button">
          <p>+</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Reviews;
