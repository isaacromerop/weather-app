import { Wrapper } from "./FranceCard.style";

const FranceCard = ({ info }) => {
  return (
    <Wrapper>
      <div className="country">
        <div className="icon">
          {info &&
            info.weather !== undefined &&
            info.weather[0].main === "Clouds" && (
              <img
                src="/assets/icons/png/003-cloudy.png"
                alt="weather"
                width={40}
              />
            )}
          {info &&
            info.weather !== undefined &&
            info.weather[0].main === "Rain" && (
              <img
                src="/assets/icons/png/005-rainy.png"
                alt="weather"
                width={40}
              />
            )}
          {info &&
            info.weather !== undefined &&
            info.weather[0].main === "Thunderstorm" && (
              <img
                src="/assets/icons/png/010-thunderstorm.png"
                alt="weather"
                width={40}
              />
            )}
          {info &&
            info.weather !== undefined &&
            info.weather[0].main === "Snow" && (
              <img
                src="/assets/icons/png/009-snowy.png"
                alt="weather"
                width={40}
              />
            )}
          {info &&
            info.weather !== undefined &&
            info.weather[0].main === "Clear" && (
              <img
                src="/assets/icons/png/001-sun.png"
                alt="weather"
                width={40}
              />
            )}
        </div>
        <div className="temperature">
          <p>
            {info && info.main !== undefined && parseInt(info.main.temp)}
            <span>&#8451;</span>
          </p>
        </div>
        <div className="location">
          <p className="title">
            {info &&
              info.name !== undefined &&
              info.name.replace("Arrondissement de ", "")}
          </p>
          <p>Francia</p>
        </div>
      </div>
      <div className="meta">
        <div className="humidity">
          <p>
            Humidity: {info && info.main !== undefined && info.main.humidity}%
          </p>
        </div>
        <div className="wind">
          <p>West</p>
        </div>
        <div className="speed">
          <p>{info && info.wind !== undefined && info.wind.speed}km/h</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default FranceCard;
