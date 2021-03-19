import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        margin: 0;
        padding: 0;
    }
    * {
        box-sizing: border-box;
        font-family: "Lato", sans-serif;
        font-size: 16px;
    }
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
