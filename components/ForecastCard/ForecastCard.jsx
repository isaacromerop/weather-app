import { Wrapper } from "./ForecastCard.style";

const ForecastCard = () => {
  return (
    <Wrapper>
      <div className="icon">
        <img src="/assets/icons/png/005-rainy.png" alt="weather" width={30} />
      </div>
      <div className="details">
        <p className="day">Monday</p>
        <p className="weather">Rain</p>
      </div>
      <div className="resume">
        <p>
          32<span>&#8451;</span>
        </p>
        <span> | </span>
        <p>
          23<span>&#8451;</span>
        </p>
      </div>
    </Wrapper>
  );
};

export default ForecastCard;
