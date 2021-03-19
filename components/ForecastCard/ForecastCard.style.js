import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 15rem;
  height: 5rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
  border: 1px solid lightgray;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  .details {
    .day {
      margin: 0;
      font-weight: bold;
    }
    .weather {
      margin: 0;
      font-weight: lighter;
    }
  }

  .resume {
    background-color: #cc66ff;
    color: #fff;
    height: 5.3rem;
    width: 5.3rem;
    position: relative;
    left: 1rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 0.9rem;
      display: flex;
      align-items: flex-start;
      span {
        font-size: 0.5rem;
      }
    }
  }
`;
