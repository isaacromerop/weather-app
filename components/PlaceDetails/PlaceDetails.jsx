import { Icon } from "../MainWeather/MainWeather.style";
import { Wrapper } from "./PlaceDetails.style";

const PlaceDetails = ({ place, location, margin }) => {
  return (
    <Wrapper>
      <div className="icon">
        <Icon width={1} height={1} margin={margin} />
      </div>
      <div className="meta">
        <p>{place}</p>
        <p>{location}</p>
      </div>
    </Wrapper>
  );
};

export default PlaceDetails;
