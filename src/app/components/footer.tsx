import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex justify-between space-between absolute bottom-0 w-full max-h-8 p-2 bg-gray-100 text-black items-center">
      <p>&copy; {new Date().getFullYear()} Aaliyah</p>

      <section className="flex items-center space-x-3">
        <Link href="https://github.com/aileks">
          <img className="max-w-6" src="github-mark.png" />
        </Link>

        <Link href="https://www.linkedin.com/in/aaliyah-harper-1473312b0/">
          <img className="max-w-6" src="linkedin-blue.png" />
        </Link>
      </section>
    </footer>
  );
}
