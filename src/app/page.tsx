/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import FollowCursor from './components/follow-cursor';
import AnimatedLink from './components/animated-link';
import { motion, useAnimation } from 'framer-motion';

export default function Home() {
  const headerControls = useAnimation();
  const aboutControls = useAnimation();
  const projectsControls = useAnimation();
  const footerControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await headerControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.7 },
      });
      await Promise.all([
        aboutControls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.7 },
        }),
        projectsControls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.7 },
        }),
      ]);
      await footerControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.7 },
      });
    };

    sequence();
  }, [aboutControls, footerControls, headerControls, projectsControls]);

  return (
    <div className="flex flex-col min-h-screen">
      <motion.header
        initial={{ y: '-10', opacity: 0 }}
        animate={headerControls}
        className="header-container mb-8"
      >
        <h1 className="text-5xl font-bold flex flex-col mt-12">
          <span className="bg-[linear-gradient(to_right,theme(colors.rose.400),theme(colors.rose.200),theme(colors.red.400),theme(colors.purple.400),theme(colors.fuchsia.400),theme(colors.rose.200),theme(colors.rose.400))] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
            Web Development
          </span>

          <span className="text-4xl font-bold italic">with Passion</span>
        </h1>
      </motion.header>

      <motion.div
        initial={{ x: '10', opacity: 0 }}
        animate={aboutControls}
        className="about-container self-end max-w-md mb-8 mt-2"
      >
        <h2 className="text-3xl font-bold mb-2">Who the h*ck am I?</h2>
        <p className="text-lg text-left">
          My name is Aaliyah and I build stuff. I&apos;m a Junior at ASU
          pursuing a B.S. in Software Engineering while also learning things on
          my own. I&apos;ve been tinkering with things since childhood and
          it&apos;s this passion and curiosity that drives me. My specialties
          are PHP (including Laravel) and JavaScript (including Vue3 + Next.js).
        </p>
      </motion.div>

      <motion.div
        initial={{ x: '-10', opacity: 0 }}
        animate={projectsControls}
        className="projects-container w-96 mb-8 mt-2"
      >
        <h2 className="text-3xl mb-2 font-bold">Projects</h2>

        <ul className="space-y-4">
          <li>
            <AnimatedLink
              href={'https://www.quillify-app.com/'}
              text={'Quillify'}
            />
            <p className="text-sm mt-1">
              A minimal web app book lovers can use to track their to-be-read
              lists! Currently in alpha.
            </p>
          </li>

          <li>
            <AnimatedLink
              href={'https://github.com/aileks/livwire-todo'}
              text={'Livewire To-Do'}
            />
            <p className="text-sm mt-1">
              Your usual to-do app, but built with{' '}
              <Link
                href="https://livewire.laravel.com/"
                className="font-bold italic hover:underline"
              >
                Livewire
              </Link>{' '}
              for a reactive experience using 99% PHP.
            </p>
          </li>

          <li>
            <AnimatedLink
              href={'https://github.com/aileks/etch-a-sketch'}
              text={'Etch-a-Sketch'}
            />
            <p className="text-sm mt-1">
              One of my first projects ever and I&apos;m still proud of it. Uses
              only HTML, CSS, and vanilla JavaScript while still keeping modern
              UI elements you know and love.
            </p>
          </li>
        </ul>
      </motion.div>

      <motion.footer
        initial={{ y: '5', opacity: 0 }}
        animate={footerControls}
        className="footer text-sm flex items-center pb-1 mt-auto justify-between"
      >
        <aside className="items-center grid-flow-col">
          <p className="italic">© 2024 - Aaliyah Harper</p>
        </aside>
        <nav className="flex space-x-2 items-center md:place-self-center md:justify-self-end">
          <Link href="https://github.com/aileks">
            <img
              src="github-mark-white.png"
              alt="Hithub Inverticat logo"
              className="w-5 h-5 mb-1"
            />
          </Link>

          <Link href="mailto:aeverly14@protonmail.com">
            <svg
              className="invert mb-0.5"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="style=fill">
                <g id="email">
                  <path
                    id="Subtract"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z"
                    fill="#000000"
                  />
                </g>
              </g>
            </svg>
          </Link>

          <Link href="https://www.linkedin.com/in/aaliyah-harper-1473312b0/">
            <img
              src="linkedin-white.png"
              alt="LinkedIn logo in white"
              className="w-5 h-5 mb-1"
            />
          </Link>
        </nav>
      </motion.footer>

      <FollowCursor />
    </div>
  );
}
