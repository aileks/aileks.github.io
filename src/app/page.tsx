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
              Aaliyah Harper
            </span>

            <span className="text-2xl font-bold italic md:text-4xl">
              Solving digital puzzles one pixel at time.
            </span>
          </h1>
        </motion.header>

        <motion.div
          initial={{ x: '10%', opacity: 0 }}
          animate={aboutControls}
          className="about-container mb-8 mt-4 max-w-xl self-end"
        >
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
            About
          </h2>

          <p className="text-center text-base sm:text-lg">
            I thrive on the intersection of creativity and technology,
            constantly seeking to innovate and build. I&apos;m passionate about
            human rights and digital privacy, which fuels my dream of enhancing
            product privacy at tech companies. I approach each project with a
            detail-oriented mindset, strong communication skills, and an
            eagerness to learn from feedback, always striving to create
            solutions that make a meaningful impact. My life goal is to make a
            difference in the AI industry.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: '-10%', opacity: 0 }}
          animate={projectsControls}
          className="projects-container mb-8 mt-4 max-w-lg"
        >
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
            Projects
          </h2>

          <ul className="space-y-6 text-center text-base md:text-left md:text-lg">
            <li>
              <span className="text-base md:text-lg">
                <AnimatedLink
                  href={'https://www.quillify-app.com/'}
                  text={'Quillify'}
                />
              </span>
              <p className="mt-1">
                A minimal web app book lovers can use to track their to-be-read
                lists! Has graphs to visualize your book tracking data.
                Currently in beta.
              </p>
            </li>

            <li>
              <span className="text-base md:text-lg">
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
              <span className="text-base md:text-lg">
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

        <motion.div
          initial={{ x: '10%', opacity: 0 }}
          animate={aboutControls}
          className="skills-container mb-12 mt-4 max-w-sm self-end text-center md:max-w-md"
        >
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
            Skills
          </h2>

          <span className="mb-4 ml-6 flex flex-wrap gap-2 md:ml-0 md:gap-4">
            {[
              'html5',
              'css3',
              'javascript',
              'typescript',
              'nodejs',
              'php',
              'laravel',
              'mysql',
              'sqlite',
              'postgresql',
              'express',
              'react',
              'vuejs',
              'bootstrap',
              'tailwindcss',
              'git',
            ].map((skill) => (
              <img
                key={skill}
                className="h-12 w-12 md:h-10 md:w-10"
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`}
                alt={`${skill} icon`}
                title={`${skill} icon`}
                aria-label={`${skill} skill`}
              />
            ))}
          </span>
        </motion.div>

        <footer className="footer mt-auto flex items-center justify-around overflow-clip pb-1 text-sm">
          <aside className="grid-flow-col items-center">
            <p className="italic">© 2024 - Aaliyah Harper</p>
          </aside>

          <nav
            className="flex items-center space-x-2 md:place-self-center md:justify-self-end"
            aria-label="Social media links"
          >
            <Link href="mailto:aeverly14@pm.com" aria-label="Email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="hover-effect mb-0.5 h-7 w-7"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </Link>

            <Link href="https://github.com/aileks" aria-label="GitHub profile">
              <img
                src="github-mark-white.png"
                alt="Github Inverticat logo"
                className="hover-effect mb-1 h-5 w-5"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/aaliyah-harper/"
              aria-label="LinkedIn profile"
            >
              <img
                src="linkedin-white.png"
                alt="LinkedIn logo in white"
                className="hover-effect mb-1 h-5 w-5"
                aria-hidden="true"
              />
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
