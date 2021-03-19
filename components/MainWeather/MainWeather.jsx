import { Wrapper, Icon } from "./MainWeather.style";
import { motion } from "framer-motion";

const appearLeft = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.3,
      type: "tween",
    },
  },
};

const MainWeather = ({ bogota }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="title">
          <p>
            <Icon width={1.5} height={1.5} margin={1} />
            {bogota.name}
          </p>
        </div>
      </div>
      <motion.div
        variants={appearLeft}
        initial="hidden"
        animate="visible"
        className="weather-info"
      >
        <div className="edge-1" />
        <div className="edge-3" />
        <div className="weather-icon">
          {bogota &&
            bogota.weather !== undefined &&
            bogota.weather[0].main === "Clouds" && (
              <img
                src="/assets/icons/png/003-cloudy.png"
                alt="weather"
                width={40}
              />
            )}
          {bogota &&
            bogota.weather !== undefined &&
            bogota.weather[0].main === "Rain" && (
              <img
                src="/assets/icons/png/005-rainy.png"
                alt="weather"
                width={40}
              />
            )}
          {bogota &&
            bogota.weather !== undefined &&
            bogota.weather[0].main === "Thunderstorm" && (
              <img
                src="/assets/icons/png/010-thunderstorm.png"
                alt="weather"
                width={40}
              />
            )}
          {bogota &&
            bogota.weather !== undefined &&
            bogota.weather[0].main === "Snow" && (
              <img
                src="/assets/icons/png/009-snowy.png"
                alt="weather"
                width={40}
              />
            )}
          {bogota &&
            bogota.weather !== undefined &&
            bogota.weather[0].main === "Clear" && (
              <img
                src="/assets/icons/png/001-sun.png"
                alt="weather"
                width={40}
              />
            )}
          <p>
            {bogota && bogota.weather !== undefined && bogota.weather[0].main}
          </p>
        </div>
        <div className="weather-deg">
          <p>
            {bogota && bogota.main !== undefined && bogota.main.temp}
            <span>&#8451;</span>
          </p>
        </div>
        <div className="edge-2" />
        <div className="edge-4" />
      </motion.div>
    </Wrapper>
  );
};

export default MainWeather;
