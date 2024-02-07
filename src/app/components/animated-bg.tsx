'use client';

import {motion} from 'framer-motion';

const AnimatedBg = () => {
  return (
    <motion.img
      alt="branches with leaves in the background"
      src="/img/branches.svg"
      className="absolute top-0 left-0 right-0 w-full z-[-1] opacity-5"
      animate={{opacity: [0.1, 0.2, 0.05]}}
      transition={{duration: 1, times: [0, 0.5, 1], repeat: 0}}
    />
  );
};

export default AnimatedBg;
