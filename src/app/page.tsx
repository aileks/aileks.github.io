/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import FollowCursor from './components/follow-cursor';
import AnimatedLink from './components/animated-link';
import { BgBeams } from './components/bg-beams';
import { motion, useAnimation } from 'framer-motion';

export default function Home() {
  const headerControls = useAnimation();
  const aboutControls = useAnimation();
  const projectsControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await headerControls.start({
        opacity: 1,
        transition: { duration: 0.5 },
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
    };

    sequence();
  }, [aboutControls, headerControls, projectsControls]);

  return (
    <>
      <BgBeams />

      <div className="hidden lg:block">
        <FollowCursor />
      </div>

      <div className="flex min-h-screen flex-col">
        <motion.header
          initial={{ opacity: 0 }}
          animate={headerControls}
          className="header-container mb-8"
        >
          <h1 className="mt-12 flex flex-col text-center text-3xl font-bold sm:text-left md:text-5xl">
            <span className="animate-gradient bg-[linear-gradient(to_right,theme(colors.violet.400),theme(colors.violet.200),theme(colors.violet.400),theme(colors.indigo.400),theme(colors.indigo.200),theme(colors.purple.200),theme(colors.violet.400))] bg-[length:200%_auto] bg-clip-text text-transparent">
              Solving digital puzzles
            </span>

            <span className="text-2xl font-bold italic md:text-4xl">
              one pixel at time.
            </span>
          </h1>
        </motion.header>

        <motion.div
          initial={{ x: '10', opacity: 0 }}
          animate={aboutControls}
          className="about-container mb-8 mt-2 max-w-md self-end"
        >
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
            Who the h*ck am I?
          </h2>

          <p className="text-center text-base sm:text-left sm:text-lg">
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
          className="projects-container mb-8 mt-2 w-96"
        >
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
            Projects
          </h2>

          <ul className="z-50 space-y-4 text-center sm:text-left">
            <li>
              <span className="sm:text-lg">
                <AnimatedLink
                  href={'https://www.quillify-app.com/'}
                  text={'Quillify'}
                />
              </span>
              <p className="mt-1">
                A minimal web app book lovers can use to track their to-be-read
                lists! Has graphs to visualize your book tracking data.
                Currently in alpha.
              </p>
            </li>

            <li>
              <span className="sm:text-lg">
                <AnimatedLink
                  href={'https://github.com/aileks/livewire-todo'}
                  text={'Livewire To-Do'}
                />
              </span>
              <p className="mt-1">
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
              <span className="sm:text-lg">
                <AnimatedLink
                  href={'https://aileks.github.io/etch-a-sketch'}
                  text={'Etch-a-Sketch'}
                />
              </span>
              <p className="mt-1">
                One of my first projects ever and I&apos;m still proud of it.
                Uses only HTML, CSS, and vanilla JavaScript while still keeping
                modern UI elements you know and love.
              </p>
            </li>
          </ul>
        </motion.div>

        <footer className="footer mt-auto flex items-center justify-around overflow-clip pb-1 text-sm">
          <aside className="grid-flow-col items-center">
            <p className="italic">© 2024 - Aaliyah Harper</p>
          </aside>

          <nav className="flex items-center space-x-2 md:place-self-center md:justify-self-end">
            <Link href="mailto:aeverly14@pm.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="hover-effect mb-0.5 h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </Link>

            <Link href="https://github.com/aileks">
              <img
                src="github-mark-white.png"
                alt="Hithub Inverticat logo"
                className="hover-effect mb-1 h-5 w-5"
              />
            </Link>

            <Link href="https://www.linkedin.com/in/aaliyah-harper-1473312b0/">
              <img
                src="linkedin-white.png"
                alt="LinkedIn logo in white"
                className="hover-effect mb-1 h-5 w-5"
              />
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
