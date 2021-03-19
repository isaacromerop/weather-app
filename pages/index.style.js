import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

const appear = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

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

export const Wrapper = styled(motion.div).attrs(() => ({
  variants: appear,
  initial: "hidden",
  animate: "visible",
}))`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
