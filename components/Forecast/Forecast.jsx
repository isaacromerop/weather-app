import { Wrapper } from "./Forecast.style";
import ForecastCard from "../ForecastCard/ForecastCard";

const Forecast = () => {
  return (
    <Wrapper>
      <div className="forecast">
        <div className="forecast-title">
          <h3>
            <span>3 Days</span> Forecast
          </h3>
        </div>
        <div className="forecast-card">
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
        </div>
      </div>
    </Wrapper>
  );
};

export default Forecast;
