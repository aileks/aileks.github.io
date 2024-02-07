import React from "react";
import Link from 'next/link';
import {motion, useAnimation} from 'framer-motion';

type AnimatedLinkProps = {
  href: string;
  text: string;
};

const AnimatedLink: React.FC<AnimatedLinkProps> = ({href, text}) => {
  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({
      x: 4,
      y: -4,
      transition: {duration: 0.2},
    });
  }

  const stopAnimation = () => {
    controls.start({
      x: 0,
      y: 0,
      transition: {duration: 0.1},
    })
  }


  return (
    <Link
      href={href}
      className="text-md"
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
    >
      <span className="hover:border-b border-white inline-flex items-center">
        {text}
        <motion.svg
          animate={controls}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
            clipRule="evenodd"
          />
        </motion.svg>
      </span>
    </Link>
  );
};

export default AnimatedLink;