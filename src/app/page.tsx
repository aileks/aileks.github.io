'use client'
import Image from 'next/image';
import Link from 'next/link';
import FollowCursor from './components/followCursor';
import AnimatedLink from './components/animated-link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Image
        alt="branches with leaves in the background"
        src="/img/branches.svg"
        width={100}
        height={100}
        className="absolute top-0 left-0 right-0 w-full z-[-1] opacity-5 faint-image"
      />
      <header className="mb-8">
        <h1 className="text-5xl font-bold flex flex-col mt-12">
            <span className="bg-[linear-gradient(to_right,theme(colors.rose.400),theme(colors.rose.200),theme(colors.red.400),theme(colors.purple.400),theme(colors.fuchsia.400),theme(colors.rose.200),theme(colors.rose.400))] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              Web Development
            </span>

          <span className="text-4xl font-bold italic">with Passion</span>
        </h1>
      </header>

      <div className="about-container self-end max-w-md mb-8 mt-2">
        <h2 className="text-3xl font-bold mb-2 italic">Who the h*ck am I?</h2>
        <p className="text-lg text-left">
          My name is Aaliyah and I build stuff sometimes. I'm a Junior at ASU
          pursuing a B.S. in Software Engineering while also learning things
          on my own. I've been tinkering with things since childhood and it's
          this passion and curiosity that drives me. My specialties are PHP
          (including Laravel) and JavaScript (including Vue3 + Next.js).
        </p>
      </div>

      <div className="projects-container w-96 mb-8 mt-2">
        <h2 className="text-3xl mb-2 font-bold">Projects</h2>

        <ul className="space-y-4">
          <li className="ml-1">
            <AnimatedLink href={'https://www.quillify-app.com/'}
                          text={'Quillify'}
            />
            <p className="text-sm mt-1">
              A minimal web app book lovers can use to track their to-be-read
              lists! Currently in alpha.
            </p>
          </li>

          <li className="ml-1">
            <AnimatedLink href={'https://github.com/aileks/livwire-todo'}
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
            <AnimatedLink href={'https://github.com/aileks/etch-a-sketch'}
                          text={'Livewire To-Do'}
            />
            <p className="text-sm mt-1">
              One of my first projects ever and I'm still proud of it. Uses
              only HTML, CSS, and vanilla JavaScript while still keeping
              modern UI elements you know and love.
            </p>
          </li>
        </ul>
      </div>

      <footer className="flex mt-auto mb-1 self-center">
        <span className="text-sm italic">Made with 💪 by Aaliyah</span>
        <span className="flex">
          <Link href="https://github.com/aileks">
            <Image
              alt="github logo"
              src="/img/github-mark-white.png"
              width={14}
              height={14}
              className="ml-2 w-auto h-auto"
            />
          </Link>

          <Link href="https://www.linkedin.com/in/aaliyah-harper-1473312b0/">
            <Image
              alt="linkedin logo"
              src="/img/linkedin-white.png"
              width={14}
              height={14}
              className="ml-2 w-auto h-auto"
            />
          </Link>
        </span>
      </footer>

      <FollowCursor/>
    </div>
  );
}
