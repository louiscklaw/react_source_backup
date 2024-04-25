import React from 'react';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const createTypingVariants = (delay = 0): Variants => ({
  initial: {
    backgroundColor: 'rgb(180, 180, 180)',
    scale: 1,
  },
  animate: {
    backgroundColor: 'rgb(150, 150, 150)',
    scale: 1.2,
    transition: {
      delay,
      duration: 0.4,
      repeat: Infinity,
      repeatType: 'mirror',
      repeatDelay: 0.4,
    },
  },
});

const TypingBubbleDot = styled(motion.div)`
  width: 8px;
  height: 8px;
  border-radius: 50%;

  &:not(:last-child) {
    margin-right: 6px;
  }
`;

const TypingBubbleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TypingIndicator: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <TypingBubbleContainer style={style}>
    <TypingBubbleDot variants={createTypingVariants(0)} initial="initial" animate="animate" />
    <TypingBubbleDot variants={createTypingVariants(0.2)} initial="initial" animate="animate" />
    <TypingBubbleDot variants={createTypingVariants(0.2)} initial="initial" animate="animate" />
  </TypingBubbleContainer>
);

export default TypingIndicator;
