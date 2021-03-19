import styled from "styled-components";
import { motion } from "framer-motion";

const appearLeft = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.7,
      duration: 0.5,
      type: "tween",
    },
  },
};

export const Wrapper = styled(motion.div).attrs(() => ({
  variants: appearLeft,
  initial:"hidden",
  animate:"visible"
}))`
  margin-bottom: 2rem;
  .forecast {
    .forecast-title {
      h3 {
        font-weight: lighter;
        font-size: 1.5rem;
        span {
          font-weight: bold;
          font-size: 1.5rem;
        }
      }
    }
  }
`;
