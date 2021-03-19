import { Wrapper } from "./AditionalInfo.style";
import Forecast from "../Forecast/Forecast";
import PlaceToVisit from "../PlaceToVisit/PlaceToVisit";
import Reviews from "../Reviews/Reviews";
import France from "../France/France";

const AdditionalInfo = ({paris, lyon}) => {
  return (
    <Wrapper>
      <Forecast />
      <PlaceToVisit />
      <Reviews />
      <France paris={paris} lyon={lyon} />
    </Wrapper>
  );
};

export default AdditionalInfo;
