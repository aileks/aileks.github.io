import Image from 'next/image';
import Link from 'next/link';
import FollowCursor from './components/followCursor';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Image
        alt="branches with leaves in the background"
        src="/img/branches.svg"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 right-0 w-full z-[-1] opacity-5"
      />
      <header className="mt-16">
        <h1 className="text-5xl font-bold mt-8 flex flex-col">
            <span className="bg-[linear-gradient(to_right,theme(colors.rose.400),theme(colors.rose.200),theme(colors.red.400),theme(colors.purple.400),theme(colors.fuchsia.400),theme(colors.rose.200),theme(colors.rose.400))] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              Web Development
            </span>

          <span className="text-4xl font-bold italic">with Passion</span>
        </h1>
      </header>

      <div className="about-container self-end max-w-md">
        <h2 className="text-3xl font-bold mb-2 italic">Who the h*ck am I?</h2>
        <p className="text-lg text-left">
          My name is Aaliyah and I build stuff sometimes. I'm a Junior at ASU
          pursuing a B.S. in Software Engineering while also learning things
          on my own. I've been tinkering with things since childhood and it's
          this passion and curiosity that drives me. My specialties are PHP
          (including Laravel) and JavaScript (including Vue3 + Next.js).
        </p>
      </div>

      <div className="projects-container w-96">
        <h2 className="text-3xl mb-2 font-bold">Projects</h2>

        <ul className="space-y-4">
          <li className="ml-1">
            <Link
              href="https://www.quillify-app.com/"
              className="hover:underline hover:font-bold flex items-center"
            >
              Quillify
              <svg
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
              </svg>
            </Link>
            <p>
              A minimal web app book lovers can use to track their to-be-read
              lists! Currently in alpha.
            </p>
          </li>

          <li className="ml-1">
            <Link
              href="https://github.com/aileks/livewire-todo"
              className="hover:underline hover:font-bold flex items-center"
            >
              Livewire To-Do App
              <svg
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
              </svg>
            </Link>
            <p>
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
            <Link
              href="https://github.com/aileks/etch-a-sketch"
              className="hover:underline hover:font-bold flex items-center"
            >
              Etch-a-Sketch
              <svg
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
              </svg>
            </Link>
            <p>
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
              width={18}
              height={18}
              className="ml-2"
            />
          </Link>

          <Link href="https://www.linkedin.com/in/aaliyah-harper-1473312b0/">
            <Image
              alt="linkedin logo"
              src="/img/linkedin-white.png"
              width={18}
              height={18}
              className="ml-2"
            />
          </Link>
        </span>
      </footer>

      <FollowCursor/>
    </div>
  );
}
