import { Wrapper, Icon } from "./MainWeather.style";

const MainWeather = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="title">
          <p>
            <Icon width={1.5} height={1.5} margin={1} />
            Bogotá
          </p>
        </div>
      </div>
      <div className="weather-info">
        <div className="edge-1" />
        <div className="edge-3" />
        <div className="weather-icon">
          <img
            src="/assets/icons/png/003-cloudy.png"
            alt="weather"
            width={40}
          />
          <p>cloudy</p>
        </div>
        <div className="weather-deg">
          <p>
            31<span>&#8451;</span>
          </p>
        </div>
        <div className="edge-2" />
        <div className="edge-4" />
      </div>
    </Wrapper>
  );
};

export default MainWeather;
