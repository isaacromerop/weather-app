import styled from "styled-components";
import { motion } from "framer-motion";

const appearRight = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      type: "tween",
    },
  },
};

export const Wrapper = styled(motion.div).attrs(() => ({
  variants: appearRight,
  initial: "hidden",
  animate: "visible",
}))`
  overflow-y: visible;
  height: 20.5rem;
  position: relative;
  bottom: -29px;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
