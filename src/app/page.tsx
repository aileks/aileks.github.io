import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full space-y-16 mt-8">
      <header>
        <h1 className="text-5xl font-bold mt-8 flex flex-col">
          <span className="bg-[linear-gradient(to_right,theme(colors.rose.400),theme(colors.rose.200),theme(colors.red.400),theme(colors.purple.400),theme(colors.fuchsia.400),theme(colors.rose.200),theme(colors.rose.400))] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
            Web Development
          </span>

          <span className="text-4xl font-bold italic">with Passion</span>
        </h1>
      </header>

      <div className="about-container self-end max-w-md">
        <h2 className="text-3xl font-semibold mb-2">Who am I?</h2>
        <p className="text-lg text-left">
          My name is Aaliyah and I build stuff sometimes. I'm a current ASU
          student pursuing a B.S. in Software Engineering with a passion for
          technology and the web as a platform. I've been tinkering with things
          since being a kid. My passion for tech drives me and I'm always
          looking to grow my knowledge and skillset. Check out some of my
          projects below!
        </p>
      </div>

      <div className="projects-container w-96">
        <ul className="space-y-4">
          <h2 className="text-3xl">Projects</h2>

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
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                  clip-rule="evenodd"
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
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                  clip-rule="evenodd"
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
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
            <p>
              One of my first projects ever and I'm still proud of it. Uses only
              HTML, CSS, and vanilla JavaScript while still keeping modern UI
              elements you know and love.
            </p>
          </li>
        </ul>
      </div>

      <footer className="absolute bottom-0 pb-2 self-center">
        <span className="text-sm italic">Made with 💪 by </span>
        <span className="text-sm italic">
          <Link
            href="https://github.com/aileks"
            className=" hover:underline font-semibold"
          >
            Aaliyah
          </Link>
        </span>
      </footer>
    </div>
  );
}
