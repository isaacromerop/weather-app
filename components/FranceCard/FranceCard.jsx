import { Wrapper } from "./FranceCard.style";

const FranceCard = () => {
  return (
    <Wrapper>
      <div className="country">
        <div className="icon">
          <img src="/assets/icons/png/009-snowy.png" alt="weather" width={40} />
        </div>
        <div className="temperature">
          <p>
            29<span>&#8451;</span>
          </p>
        </div>
        <div className="location">
          <p className="title">Lyon</p>
          <p>Francia</p>
        </div>
      </div>
      <div className="meta">
        <div className="humidity">
          <p>Humidity: 64%</p>
        </div>
        <div className="wind">
          <p>West</p>
        </div>
        <div className="speed">
          <p>8.3km/h</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default FranceCard;
