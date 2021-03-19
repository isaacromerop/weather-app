import styled from "styled-components";

export const Wrapper = styled.div`
  width: 20rem;
  height: 8rem;
  background-color: lightblue;
  position: relative;
  margin-bottom: 1rem;
  top: -8.5rem;
  border-radius: 2rem;
  -webkit-box-shadow: 7px 9px 25px 13px rgba(0, 0, 0, 0.13);
  box-shadow: 7px 9px 25px 13px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 768px) {
    top: 0;
  }
`;
