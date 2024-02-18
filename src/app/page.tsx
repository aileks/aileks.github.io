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
      {/* <svg
        id="bg-svg"
        viewBox="0 0 600 400"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="absolute bg-cover bg-center z-[-1] overflow-clip top-0 left-0"
      >
        <defs>
          <linearGradient id="grad1_0" x1="33.3%" y1="100%" x2="100%" y2="0%">
            <stop offset="20%" stop-color="#1a1a1a" stopColor="1"></stop>
            <stop offset="80%" stop-color="#1a1a1a" stopColor="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad1_1" x1="33.3%" y1="100%" x2="100%" y2="0%">
            <stop offset="20%" stop-color="#1a1a1a" stopColor="1"></stop>
            <stop offset="80%" stop-color="#171717" stopColor="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad1_2" x1="33.3%" y1="100%" x2="100%" y2="0%">
            <stop offset="20%" stop-color="#151515" stopColor="1"></stop>
            <stop offset="80%" stop-color="#171717" stopColor="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad1_3" x1="33.3%" y1="100%" x2="100%" y2="0%">
            <stop offset="20%" stop-color="#151515" stopColor="1"></stop>
            <stop offset="80%" stop-color="#121212" stopColor="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad1_4" x1="33.3%" y1="100%" x2="100%" y2="0%">
            <stop offset="20%" stop-color="#0e0e0e" stopColor="1"></stop>
            <stop offset="80%" stop-color="#121212" stopColor="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad1_5" x1="33.3%" y1="100%" x2="100%" y2="0%">
            <stop offset="20%" stop-color="#0e0e0e" stopColor="1"></stop>
            <stop offset="80%" stop-color="#0a0a0a" stopColor="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad1_6" x1="33.3%" y1="100%" x2="100%" y2="0%">
            <stop offset="20%" stop-color="#050505" stopColor="1"></stop>
            <stop offset="80%" stop-color="#0a0a0a" stopColor="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad1_7" x1="33.3%" y1="100%" x2="100%" y2="0%">
            <stop offset="20%" stop-color="#050505" stopColor="1"></stop>
            <stop offset="80%" stop-color="#000000" stopColor="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_0" x1="0%" y1="100%" x2="66.7%" y2="0%">
            <stop offset="20%" stop-color="#1a1a1a" stopColor="1"></stop>
            <stop offset="80%" stop-color="#1a1a1a" stopColor="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_1" x1="0%" y1="100%" x2="66.7%" y2="0%">
            <stop offset="20%" stop-color="#171717" stopColor="1"></stop>
            <stop offset="80%" stop-color="#1a1a1a" stopColor="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_2" x1="0%" y1="100%" x2="66.7%" y2="0%">
            <stop offset="20%" stop-color="#171717" stopColor="1"></stop>
            <stop offset="80%" stop-color="#151515" stopColor="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_3" x1="0%" y1="100%" x2="66.7%" y2="0%">
            <stop offset="20%" stop-color="#121212" stopColor="1"></stop>
            <stop offset="80%" stop-color="#151515" stopColor="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_4" x1="0%" y1="100%" x2="66.7%" y2="0%">
            <stop offset="20%" stop-color="#121212" stopColor="1"></stop>
            <stop offset="80%" stop-color="#0e0e0e" stopColor="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_5" x1="0%" y1="100%" x2="66.7%" y2="0%">
            <stop offset="20%" stop-color="#0a0a0a" stopColor="1"></stop>
            <stop offset="80%" stop-color="#0e0e0e" stopColor="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_6" x1="0%" y1="100%" x2="66.7%" y2="0%">
            <stop offset="20%" stop-color="#0a0a0a" stopColor="1"></stop>
            <stop offset="80%" stop-color="#050505" stopColor="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_7" x1="0%" y1="100%" x2="66.7%" y2="0%">
            <stop offset="20%" stop-color="#000000" stopColor="1"></stop>
            <stop offset="80%" stop-color="#050505" stopColor="1"></stop>
          </linearGradient>
        </defs>
        <g transform="translate(900, 600)">
          <path
            d="M-351.5 0C-336.3 -18.9 -321 -37.9 -306.3 -54C-291.5 -70.1 -277.2 -83.4 -270.6 -98.5C-264 -113.6 -265.1 -130.6 -270.2 -156C-275.3 -181.4 -284.4 -215.1 -269.3 -226C-254.2 -236.9 -214.9 -224.9 -194.8 -232.1C-174.7 -239.3 -173.8 -265.6 -164 -284.1C-154.2 -302.5 -135.5 -313 -116.6 -320.4C-97.8 -327.8 -78.8 -332.1 -59.4 -336.8C-39.9 -341.5 -20 -346.5 0 -351.5L0 0Z"
            fill="#020202"
          ></path>
          <path
            d="M-307.6 0C-294.3 -16.6 -280.9 -33.2 -268 -47.3C-255.1 -61.3 -242.6 -72.9 -236.8 -86.2C-231 -99.4 -232 -114.3 -236.4 -136.5C-240.9 -158.7 -248.9 -188.2 -235.6 -197.7C-222.4 -207.2 -188 -196.8 -170.4 -203.1C-152.8 -209.4 -152.1 -232.4 -143.5 -248.5C-134.9 -264.7 -118.5 -273.9 -102.1 -280.4C-85.6 -286.9 -69 -290.6 -52 -294.7C-34.9 -298.8 -17.5 -303.2 0 -307.6L0 0Z"
            fill="#070707"
          ></path>
          <path
            d="M-263.7 0C-252.2 -14.2 -240.8 -28.4 -229.7 -40.5C-218.6 -52.6 -207.9 -62.5 -203 -73.9C-198 -85.2 -198.8 -98 -202.6 -117C-206.5 -136 -213.3 -161.3 -202 -169.5C-190.6 -177.6 -161.1 -168.7 -146.1 -174.1C-131 -179.5 -130.3 -199.2 -123 -213C-115.7 -226.9 -101.6 -234.8 -87.5 -240.3C-73.3 -245.9 -59.1 -249.1 -44.5 -252.6C-29.9 -256.1 -15 -259.9 0 -263.7L0 0Z"
            fill="#0c0c0c"
          ></path>
          <path
            d="M-219.7 0C-210.2 -11.8 -200.6 -23.7 -191.4 -33.8C-182.2 -43.8 -173.3 -52.1 -169.1 -61.6C-165 -71 -165.7 -81.6 -168.9 -97.5C-172.1 -113.4 -177.8 -134.4 -168.3 -141.2C-158.9 -148 -134.3 -140.6 -121.7 -145.1C-109.2 -149.6 -108.6 -166 -102.5 -177.5C-96.4 -189.1 -84.7 -195.6 -72.9 -200.3C-61.1 -204.9 -49.3 -207.6 -37.1 -210.5C-25 -213.4 -12.5 -216.6 0 -219.7L0 0Z"
            fill="#101010"
          ></path>
          <path
            d="M-175.8 0C-168.1 -9.5 -160.5 -18.9 -153.1 -27C-145.8 -35.1 -138.6 -41.7 -135.3 -49.3C-132 -56.8 -132.6 -65.3 -135.1 -78C-137.6 -90.7 -142.2 -107.5 -134.6 -113C-127.1 -118.4 -107.4 -112.5 -97.4 -116.1C-87.3 -119.7 -86.9 -132.8 -82 -142C-77.1 -151.2 -67.7 -156.5 -58.3 -160.2C-48.9 -163.9 -39.4 -166.1 -29.7 -168.4C-20 -170.7 -10 -173.3 0 -175.8L0 0Z"
            fill="#131313"
          ></path>
          <path
            d="M-131.8 0C-126.1 -7.1 -120.4 -14.2 -114.9 -20.3C-109.3 -26.3 -104 -31.3 -101.5 -36.9C-99 -42.6 -99.4 -49 -101.3 -58.5C-103.2 -68 -106.7 -80.7 -101 -84.7C-95.3 -88.8 -80.6 -84.3 -73 -87C-65.5 -89.7 -65.2 -99.6 -61.5 -106.5C-57.8 -113.4 -50.8 -117.4 -43.7 -120.2C-36.7 -122.9 -29.6 -124.6 -22.3 -126.3C-15 -128.1 -7.5 -129.9 0 -131.8L0 0Z"
            fill="#161616"
          ></path>
          <path
            d="M-87.9 0C-84.1 -4.7 -80.3 -9.5 -76.6 -13.5C-72.9 -17.5 -69.3 -20.8 -67.7 -24.6C-66 -28.4 -66.3 -32.7 -67.5 -39C-68.8 -45.3 -71.1 -53.8 -67.3 -56.5C-63.5 -59.2 -53.7 -56.2 -48.7 -58C-43.7 -59.8 -43.4 -66.4 -41 -71C-38.6 -75.6 -33.9 -78.3 -29.2 -80.1C-24.4 -82 -19.7 -83 -14.8 -84.2C-10 -85.4 -5 -86.6 0 -87.9L0 0Z"
            fill="#191919"
          ></path>
          <path
            d="M-43.9 0C-42 -2.4 -40.1 -4.7 -38.3 -6.8C-36.4 -8.8 -34.7 -10.4 -33.8 -12.3C-33 -14.2 -33.1 -16.3 -33.8 -19.5C-34.4 -22.7 -35.6 -26.9 -33.7 -28.2C-31.8 -29.6 -26.9 -28.1 -24.3 -29C-21.8 -29.9 -21.7 -33.2 -20.5 -35.5C-19.3 -37.8 -16.9 -39.1 -14.6 -40.1C-12.2 -41 -9.9 -41.5 -7.4 -42.1C-5 -42.7 -2.5 -43.3 0 -43.9L0 0Z"
            fill="#1a1a1a"
          ></path>
        </g>
        <g transform="translate(0, 0)">
          <path
            d="M351.5 0C358.1 23 364.8 45.9 346.2 61C327.6 76.2 283.9 83.5 267.8 97.5C251.7 111.5 263.2 132.2 266.7 154C270.3 175.8 266 198.7 251.3 210.8C236.5 223 211.4 224.3 192.2 229C173 233.8 159.7 242 147 254.6C134.3 267.2 122.1 284.2 107.1 294.1C92 304 73.9 306.8 55.6 315.1C37.2 323.5 18.6 337.5 0 351.5L0 0Z"
            fill="#020202"
          ></path>
          <path
            d="M307.6 0C313.4 20.1 319.2 40.2 302.9 53.4C286.7 66.7 248.4 73 234.3 85.3C220.2 97.5 230.3 115.7 233.4 134.7C236.5 153.8 232.7 173.9 219.9 184.5C207 195.1 185 196.2 168.2 200.4C151.4 204.6 139.7 211.8 128.6 222.8C117.5 233.8 106.9 248.7 93.7 257.4C80.5 266 64.7 268.4 48.6 275.7C32.6 283.1 16.3 295.3 0 307.6L0 0Z"
            fill="#070707"
          ></path>
          <path
            d="M263.7 0C268.6 17.2 273.6 34.4 259.7 45.8C245.7 57.1 213 62.6 200.9 73.1C188.8 83.6 197.4 99.1 200.1 115.5C202.7 131.9 199.5 149 188.4 158.1C177.4 167.2 158.5 168.2 144.1 171.8C129.7 175.4 119.8 181.5 110.3 191C100.7 200.4 91.6 213.2 80.3 220.6C69 228 55.4 230.1 41.7 236.4C27.9 242.6 14 253.1 0 263.7L0 0Z"
            fill="#0c0c0c"
          ></path>
          <path
            d="M219.7 0C223.8 14.3 228 28.7 216.4 38.2C204.8 47.6 177.5 52.2 167.4 60.9C157.3 69.7 164.5 82.6 166.7 96.2C168.9 109.9 166.2 124.2 157 131.8C147.8 139.3 132.1 140.2 120.1 143.2C108.1 146.1 99.8 151.3 91.9 159.1C83.9 167 76.3 177.6 66.9 183.8C57.5 190 46.2 191.7 34.7 197C23.3 202.2 11.6 211 0 219.7L0 0Z"
            fill="#101010"
          ></path>
          <path
            d="M175.8 0C179.1 11.5 182.4 23 173.1 30.5C163.8 38.1 142 41.7 133.9 48.7C125.8 55.7 131.6 66.1 133.4 77C135.2 87.9 133 99.4 125.6 105.4C118.3 111.5 105.7 112.1 96.1 114.5C86.5 116.9 79.9 121 73.5 127.3C67.1 133.6 61.1 142.1 53.5 147.1C46 152 37 153.4 27.8 157.6C18.6 161.8 9.3 168.8 0 175.8L0 0Z"
            fill="#131313"
          ></path>
          <path
            d="M131.8 0C134.3 8.6 136.8 17.2 129.8 22.9C122.9 28.6 106.5 31.3 100.4 36.6C94.4 41.8 98.7 49.6 100 57.7C101.4 65.9 99.7 74.5 94.2 79.1C88.7 83.6 79.3 84.1 72.1 85.9C64.9 87.7 59.9 90.8 55.1 95.5C50.4 100.2 45.8 106.6 40.1 110.3C34.5 114 27.7 115 20.8 118.2C14 121.3 7 126.6 0 131.8L0 0Z"
            fill="#161616"
          ></path>
          <path
            d="M87.9 0C89.5 5.7 91.2 11.5 86.6 15.3C81.9 19 71 20.9 67 24.4C62.9 27.9 65.8 33 66.7 38.5C67.6 44 66.5 49.7 62.8 52.7C59.1 55.7 52.8 56.1 48 57.3C43.2 58.5 39.9 60.5 36.8 63.7C33.6 66.8 30.5 71.1 26.8 73.5C23 76 18.5 76.7 13.9 78.8C9.3 80.9 4.7 84.4 0 87.9L0 0Z"
            fill="#191919"
          ></path>
          <path
            d="M43.9 0C44.8 2.9 45.6 5.7 43.3 7.6C41 9.5 35.5 10.4 33.5 12.2C31.5 13.9 32.9 16.5 33.3 19.2C33.8 22 33.2 24.8 31.4 26.4C29.6 27.9 26.4 28 24 28.6C21.6 29.2 20 30.3 18.4 31.8C16.8 33.4 15.3 35.5 13.4 36.8C11.5 38 9.2 38.3 6.9 39.4C4.7 40.4 2.3 42.2 0 43.9L0 0Z"
            fill="#1a1a1a"
          ></path>
        </g>
      </svg>
 */}

      <div className="lg:block hidden">
        <FollowCursor />
      </div>

      <div className="flex flex-col min-h-screen">
        <motion.header
          initial={{ y: '-25', opacity: 0 }}
          animate={headerControls}
          className="header-container mb-8"
        >
          <h1 className="text-3xl md:text-5xl font-bold flex flex-col mt-12">
            <span className="bg-[linear-gradient(to_right,theme(colors.rose.400),theme(colors.rose.200),theme(colors.red.400),theme(colors.purple.400),theme(colors.violet.200),theme(colors.rose.200),theme(colors.rose.400))] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              Solving digital puzzles
            </span>

            <span className="text-2xl md:text-4xl font-bold italic">
              one pixel at time.
            </span>
          </h1>
        </motion.header>

        <motion.div
          initial={{ x: '10', opacity: 0 }}
          animate={aboutControls}
          className="about-container self-end max-w-md mb-8 mt-2"
        >
          <h2 className="text-2xl md:text-3xl text-center font-bold mb-4">
            Who the h*ck am I?
          </h2>

          <p className="text-lg text-center sm:text-left">
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
          <h2 className="text-2xl text-center md:text-3xl mb-4 font-bold">
            Projects
          </h2>

          <ul className="space-y-4 text-center sm:text-left">
            <li>
              <span className="text-lg">
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
              <span className="text-lg">
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
              <span className="text-lg">
                <AnimatedLink
                  href={'https://github.com/aileks/etch-a-sketch'}
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

        <motion.footer
          initial={{ y: '5', opacity: 0 }}
          animate={footerControls}
          className="footer text-sm flex items-center pb-1 mt-auto justify-around"
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
                strokeWidth="1.5"
                stroke="white"
                className="hover-effect w-7 h-7 mb-0.5"
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
                className="hover-effect w-5 h-5 mb-1"
              />
            </Link>

            <Link href="https://www.linkedin.com/in/aaliyah-harper-1473312b0/">
              <img
                src="linkedin-white.png"
                alt="LinkedIn logo in white"
                className="hover-effect w-5 h-5 mb-1"
              />
            </Link>
          </nav>
        </motion.footer>
      </div>
    </>
  );
}
