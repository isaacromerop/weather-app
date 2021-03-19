import styled from "styled-components";
import { motion } from "framer-motion";

const appearLeft = {
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
  variants: appearLeft,
  initial: "hidden",
  animate: "visible",
}))`
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
    cursor: pointer;
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
    transition: 0.3s;

    &:hover {
      transform: scale(1.05);
    }

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
