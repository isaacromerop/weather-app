import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  width: 20rem;
  height: 8rem;
  background-color: #fff;
  position: relative;
  margin-bottom: 1rem;
  top: -8.5rem;
  border-radius: 2rem;
  -webkit-box-shadow: 7px 9px 25px 13px rgba(0, 0, 0, 0.13);
  box-shadow: 7px 9px 25px 13px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  .country {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .icon {
      background-color: #e6f2ff;
      height: 100%;
      width: 6rem;
      border-radius: 2rem 1rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      left: -22px;
    }

    .temperature {
      min-width: 4rem;
      p {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        font-size: 2rem;
        span {
          font-size: 0.7rem;
        }
      }
    }
    .location {
      display: flex;
      flex-direction: column;
      position: relative;
      left: -20px;
      p {
        margin: 0;
        font-weight: lighter;
        font-size: 0.9rem;
      }
      .title {
        font-weight: bold;
        font-size: 1rem;
      }
    }
  }

  .meta {
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      margin: 0;
      font-size: 0.8rem;
      color: lightgrey;
    }
  }

  @media screen and (max-width: 768px) {
    top: 0;
  }
`;
