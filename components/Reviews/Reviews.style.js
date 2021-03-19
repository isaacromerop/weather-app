import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
  .reviewers {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 3.5rem;
    margin-bottom: 1rem;

    .pictures {
      display: flex;
      img {
        width: 2rem;
        height: 2rem;
        object-fit: cover;
        border-radius: 0.5rem;
      }
      div {
        height: 2rem;
        width: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background: #dd99ff;
        border-radius: 0.5rem;
      }
    }
  }
  .text {
    font-weight: lighter;
    color: lightgray;
    p {
      margin: 0;
    }
  }
  .place {
    background: url("/assets/images/abstract.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 15rem;
    height: 5rem;
    border-radius: 2rem;
    margin-bottom: 1rem;
    padding: 1rem 0 0;
  }
  .location {
    position: relative;
    width: 15rem;
    height: 10rem;
    border-radius: 2rem;
    padding: 1rem 0 0;
    background: url("/assets/images/fountain.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .plus-button {
      cursor: pointer;
      background-color: #cc66ff;
      position: absolute;
      height: 10rem;
      width: 5rem;
      top: 0;
      right: -1px;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        margin: 0;
        font-size: 2rem;
        color: #fff;
      }
    }
  }
`;

export const IconPlus = styled(FaPlus)`
  width: 1rem;
  height: 1rem;
  color: lightgray;
`;
