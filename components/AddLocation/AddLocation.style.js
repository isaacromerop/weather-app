import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  height: 10rem;
  width: 20rem;
  position: relative;
  top: -7.5rem;
  border-radius: 2rem;
  border: 2px dashed lightgrey;
  -webkit-box-shadow: 7px 9px 25px 13px rgba(0, 0, 0, 0.13);
  box-shadow: 7px 9px 25px 13px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  .button {
    display: flex;
    margin: 1rem 0 0;

    button {
      cursor: pointer;
      border-radius: 4rem;
      border: none;
      width: 10rem;
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
      color: #550080;
      background-color: #eee6ff;

      &:focus {
        outline: none;
      }
    }
  }

  .image {
    justify-self: flex-end;
    img {
      width: 200px;
      height: 90px;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 768px) {
    top: 0;
  }
`;
