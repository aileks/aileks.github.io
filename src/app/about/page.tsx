import Image from 'next/image';

export default function About() {
  return (
    <div className="flex justify-center h-[80vh] items-center">
      <div className="flex flex-col flex-1 justify-center h-full max-w-90 text-center items-center">
        <div className="max-w-prose space-y-8">
          {/* Heading */}
          <h1 className="max-w-prose pb-3 my-auto text-center text-2xl font-bold">
            Hi! I'm Aaliyah.
          </h1>

          {/* Skills */}
          <section className="flex items-center">
            <div className="h-auto justify-center w-full flex-wrap flex space-x-2">
              <Image
                className="invert"
                width={32}
                height={32}
                src="img/linux.svg"
                alt="Linux"
              />

              <Image
                className="invert"
                width={32}
                height={32}
                src="img/bash.svg"
                alt="Bash"
              />

              <Image
                className="invert"
                width={32}
                height={32}
                src="img/html.svg"
                alt="HTML"
              />

              <Image
                className="invert"
                width={32}
                height={32}
                src="img/css.svg"
                alt="CSS"
              />

              <Image
                className="invert"
                width={32}
                height={32}
                src="img/javascript.svg"
                alt="JavaScript"
              />

              <Image
                className="invert"
                width={32}
                height={32}
                src="img/typescript.svg"
                alt="TypeScript"
              />

              <Image
                className="invert"
                width={32}
                height={32}
                src="img/php.svg"
                alt="PHP"
              />

              <Image
                className="invert"
                width={32}
                height={32}
                src="img/java.svg"
                alt="Java"
              />

              <Image
                className="invert"
                width={32}
                height={32}
                src="img/tailwindcss.svg"
                alt="TailwindCSS"
              />

              <Image
                className="invert"
                width={32}
                height={32}
                src="img/node.svg"
                alt="Node.js"
              />

              <Image
                className="invert"
                width={32}
                height={32}
                src="img/react.svg"
                alt="React"
              />

              <Image
                className="invert"
                width={32}
                height={32}
                src="img/next.svg"
                alt="Next.js"
              />

              <Image
                className="invert"
                width={32}
                height={32}
                src="img/vue.svg"
                alt="Vue.js"
              />

              <Image
                className="invert"
                width={32}
                height={32}
                src="img/laravel.svg"
                alt="Laravel"
              />

              <Image
                className="invert"
                width={32}
                height={32}
                src="img/mysql.svg"
                alt="MySQL"
              />
            </div>
          </section>

          {/* About */}
        </div>
      </div>
    </div>
  );
}
