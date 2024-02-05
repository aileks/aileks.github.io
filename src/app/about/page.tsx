import PageLayout from '@/layouts/PageLayout';

export default function About() {
  return (
    <PageLayout>
      <div className="flex justify-center h-[80vh] items-center">
        <div className="flex flex-col flex-1 justify-center h-full max-w-90 text-center items-center">
          <div className="max-w-prose space-y-8">
            {/* Heading */}
            <h1 className="max-w-prose pb-6 my-auto text-center text-2xl font-bold">
              Hi! I'm Aaliyah.
            </h1>

            {/* About */}
            <p className="text-lg pt-12 text-center">
              I'm a current ASU student pursuing a B.S. in Software Engineering
              with a passion for technology and the web as a platform. Ever
              since I was a kid I've been tinkering with gadgets and teaching
              myself things. My passion for tech drives me and I'm always
              looking to grow and improve.
            </p>

            <section className="h-3/5 flex items-center">
              {/* Skills */}
              <div className="h-auto justify-center w-full mt-8 flex-wrap flex space-x-2">
                <span className="h-16 w-16">
                  <img className="invert" src="img/linux.svg" alt="Linux" />
                </span>

                <span className="h-16 w-16">
                  <img className="invert" src="img/bash.svg" alt="Bash" />
                </span>

                <span className="h-16 w-16">
                  <img className="invert" src="img/html.svg" alt="HTML" />
                </span>

                <span className="h-16 w-16">
                  <img className="invert" src="img/css.svg" alt="CSS" />
                </span>

                <span className="h-16 w-16">
                  <img
                    className="invert"
                    src="img/javascript.svg"
                    alt="JavaScript"
                  />
                </span>

                <span className="h-16 w-16">
                  <img
                    className="invert"
                    src="img/typescript.svg"
                    alt="TypeScript"
                  />
                </span>

                <span className="h-16 w-16">
                  <img className="invert" src="img/php.svg" alt="PHP" />
                </span>

                <span className="h-16 w-16">
                  <img className="invert" src="img/java.svg" alt="Java" />
                </span>

                <span className="h-16 w-16">
                  <img
                    className="invert"
                    src="img/tailwindcss.svg"
                    alt="TailwindCSS"
                  />
                </span>

                <span className="h-16 w-16">
                  <img className="invert" src="img/node.svg" alt="Node.js" />
                </span>

                <span className="h-16 w-16">
                  <img className="invert" src="img/react.svg" alt="React" />
                </span>

                <span className="h-16 w-16">
                  <img className="invert" src="img/next.svg" alt="Next.js" />
                </span>

                <span className="h-16 w-16">
                  <img className="invert" src="img/vue.svg" alt="Vue.js" />
                </span>

                <span className="h-16 w-16">
                  <img className="invert" src="img/laravel.svg" alt="Laravel" />
                </span>

                <span className="h-16 w-16">
                  <img className="invert" src="img/mysql.svg" alt="MySQL" />
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
