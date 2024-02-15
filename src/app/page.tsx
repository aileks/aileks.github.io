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
    <>
      <FollowCursor />
      <div className="flex flex-col min-h-screen">
        <motion.header
          initial={{ y: '-25', opacity: 0 }}
          animate={headerControls}
          className="header-container mb-8"
        >
          <h1 className="text-5xl font-bold flex flex-col mt-12">
            <span className="bg-[linear-gradient(to_right,theme(colors.rose.400),theme(colors.rose.200),theme(colors.red.400),theme(colors.purple.400),theme(colors.fuchsia.400),theme(colors.rose.200),theme(colors.rose.400))] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              Unraveling digital puzzles
            </span>

            <span className="text-4xl font-bold italic">
              one pixel at time.
            </span>
          </h1>
        </motion.header>

        <motion.div
          initial={{ x: '10', opacity: 0 }}
          animate={aboutControls}
          className="about-container self-end max-w-md mb-8 mt-2"
        >
          <h2 className="text-3xl font-bold mb-4">Who the h*ck am I?</h2>
          <p className="text-lg text-left">
            My name is Aaliyah and I build stuff. I&apos;m a Junior at ASU
            pursuing a B.S. in Software Engineering while also learning things
            on my own. I&apos;ve been tinkering with things since childhood and
            it&apos;s this passion and curiosity that drives me. My specialties
            are PHP (including Laravel) and JavaScript (including Vue3 +
            Next.js).
          </p>
        </motion.div>

        <motion.div
          initial={{ x: '-10', opacity: 0 }}
          animate={projectsControls}
          className="projects-container w-96 mb-8 mt-2"
        >
          <h2 className="text-3xl mb-4 font-bold">Projects</h2>

          <ul className="space-y-4">
            <li>
              <AnimatedLink
                href={'https://www.quillify-app.com/'}
                text={'Quillify'}
              />
              <p className="text-sm mt-1">
                A minimal web app book lovers can use to track their to-be-read
                lists! Has graphs to visualize your book tracking data.
                Currently in alpha.
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
                One of my first projects ever and I&apos;m still proud of it.
                Uses only HTML, CSS, and vanilla JavaScript while still keeping
                modern UI elements you know and love.
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
            <Link href="mailto:aeverly14@protonmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                className="w-7 h-7 mb-0.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </Link>

            <Link href="https://github.com/aileks">
              <img
                src="github-mark-white.png"
                alt="Hithub Inverticat logo"
                className="w-5 h-5 mb-1"
              />
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
      </div>
    </>
  );
}
