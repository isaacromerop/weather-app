import { Wrapper } from "./PlaceToVisit.style";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const PlaceToVisit = () => {
  return (
    <Wrapper>
      <div className="visit-container">
        <div className="visit-title">
          <h3>
            <span>Place To</span> Visit
          </h3>
        </div>
        <div className="visit-image">
          <div className="content">
            <PlaceDetails place="Moskow Street" location="Moskow" margin={0} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PlaceToVisit;
