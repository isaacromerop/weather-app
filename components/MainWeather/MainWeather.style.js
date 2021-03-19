import styled, { css } from "styled-components";
import { ImLocation } from "react-icons/im";

const weatherInfo = css`
  height: 6rem;
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const edge = css`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  border: none;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 92.5vw;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  margin: 2rem 0;
  background-image: url("/assets/images/roof.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;

  .container {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.03),
      rgba(0, 0, 0, 0.01)
    );

    p {
      position: absolute;
      margin: 0;
      top: 25%;
      left: 10%;
      font-size: 2rem;
      font-weight: bold;
      color: #cc66ff;
    }

    .title {
      display: flex;
      align-items: center;
    }
  }

  .weather-info {
    cursor: pointer;
    height: 15rem;
    width: 6rem;
    position: absolute;
    left: -4.2%;
    transition: 0.3s;

    &:hover {
      transform: scale(1.05), translate(5px);
    }

    .weather-icon {
      ${weatherInfo}
      background-color: #550080;
      z-index: 1;
      position: absolute;
      border-radius: 0 2rem 2rem 0;
      top: 10%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        margin: 0;
        color: #fff;
        font-size: 0.9rem;
      }
    }
    .weather-deg {
      ${weatherInfo}
      background-color: #cc66ff;
      height: 9rem;
      position: absolute;
      top: 30%;
      border-radius: 0 0 2rem 0;
      display: flex;

      p {
        margin: 0 0 1.5rem;
        font-size: 2rem;
        font-weight: bold;
        align-self: flex-end;
        color: #fff;
        display: flex;
        align-items: flex-start;
      }
    }
    .edge-1 {
      ${edge}
      background-color: purple;
    }
    .edge-2 {
      ${edge}
      bottom: 0;
      background-color: lightpink;
    }
    .edge-3 {
      ${edge}
      background-color: #fff;
      border-radius: 0 0 0 0.5rem;
    }
    .edge-4 {
      ${edge}
      bottom: 0;
      background-color: #fff;
      border-radius: 0.5rem 0 0 0;
    }
  }
  @media screen and (max-width: 767px) {
    width: 90vw;

    .weather-info {
      bottom: 0;
      left: 30%;
      height: 6rem;
      width: 14rem;
      display: flex;

      .weather-icon {
        ${weatherInfo}
        position: relative;
        top: 0;
        left: 10%;
        border-radius: 2rem;
      }
      .weather-deg {
        ${weatherInfo}
        position: relative;
        top: 0;
        width: 7rem;
        border-radius: 0 2rem 2rem 0;
        right: 5%;
        padding-right: 1.5rem;

        p {
          margin: 0 0 0 3rem;
          align-self: center;
        }
      }
      .edge-1 {
        display: none;
      }
      .edge-2 {
        display: none;
      }
      .edge-3 {
        display: none;
      }
      .edge-4 {
        display: none;
      }
    }
  }
`;

export const Icon = styled(ImLocation)`
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  margin-right: ${({ margin }) => `${margin}rem`};
`;
