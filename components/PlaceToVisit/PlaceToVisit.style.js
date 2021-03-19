import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .visit-title {
    h3 {
      font-weight: lighter;
      font-size: 1.5rem;
      span {
        font-weight: bold;
        font-size: 1.5rem;
      }
    }
  }

  .visit-image {
    height: 17.5rem;
    width: 15.5rem;
    background: url("/assets/images/moskow.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 2rem;
    margin-bottom: 2rem;
    -webkit-box-shadow: 7px 9px 25px 13px rgba(0, 0, 0, 0.13);
    box-shadow: 7px 9px 25px 13px rgba(0, 0, 0, 0.13);

    .content {
      height: 100%;
      width: 100%;
      border-radius: 2rem;
      padding: 1.5rem 1rem 0;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.5)
      );
    }
  }
`;
