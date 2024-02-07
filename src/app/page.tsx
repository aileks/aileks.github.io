'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FollowCursor from './components/followCursor';
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
      <Image
        alt="branches with leaves in the background"
        src="/img/branches.svg"
        width={100}
        height={100}
        className="absolute top-0 left-0 right-0 w-full z-[-1] opacity-5 faint-image"
      />
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
          My name is Aaliyah and I build stuff sometimes. I&apos;m a Junior at
          ASU pursuing a B.S. in Software Engineering while also learning things
          on my own. I&apos;ve been tinkering with things since childhood and
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
          <li className="ml-1">
            <AnimatedLink
              href={'https://www.quillify-app.com/'}
              text={'Quillify'}
            />
            <p className="text-sm mt-1">
              A minimal web app book lovers can use to track their to-be-read
              lists! Currently in alpha.
            </p>
          </li>

          <li className="ml-1">
            <AnimatedLink
              href={'https://github.com/aileks/livwire-todo'}
              text={'Livewire To-Do'}
            />
            <p className="text-sm mt-1">
              Your usual to-do app, but built with{' '}
              <Link
                href="https://livewire.laravel.com/"
                className="font-semibold hover:underline"
              >
                Livewire
              </Link>{' '}
              for a reactive experience using 99% PHP.
            </p>
          </li>

          <li className="ml-1">
            <AnimatedLink
              href={'https://github.com/aileks/etch-a-sketch'}
              text={'Livewire To-Do'}
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
        initial={{ y: '-5', opacity: 0 }}
        animate={footerControls}
        className="flex mt-auto sm:pb-3 pb-1 lg:pb-1 md:pb-1 xl:pb-1 self-center"
      >
        <span className="text-sm italic">Made with 💪 by Aaliyah</span>
        {/* <span className="flex"> */}
        {/*   <Link href="https://github.com/aileks"> */}
        {/*     <img */}
        {/*       alt="github logo" */}
        {/*       src="/img/github-mark-white.png" */}
        {/*       className="ml-2" */}
        {/*     /> */}
        {/*   </Link> */}

        {/*   <Link href="https://www.linkedin.com/in/aaliyah-harper-1473312b0/"> */}
        {/*     <img */}
        {/*       alt="linkedin logo" */}
        {/*       src="/img/linkedin-white.png" */}
        {/*       className="ml-2" */}
        {/*     /> */}
        {/*   </Link> */}
        {/* </span> */}
      </motion.footer>

      <FollowCursor />
    </div>
  );
}
