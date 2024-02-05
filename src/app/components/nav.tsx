import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex justify-between h-10 bg-gray-100 text-black">
      <img className="w-[24px] h-[24px] ml-2 self-center" src="logo.png" />

      <section className="flex justify-end space-x-4 items-center mr-4">
        <Link
          className="hover:underline hover:text-gray-700 hover:italic"
          href="/"
        >
          Home
        </Link>

        <Link
          className="hover:underline hover:text-gray-700 hover:italic"
          href="/about"
        >
          About
        </Link>

        <Link
          className="hover:underline hover:text-gray-700 hover:italic"
          href="/projects"
        >
          Projects
        </Link>
      </section>
    </nav>
  );
}
