import PageLayout from './layouts/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <div className="flex justify-center h-[90vh] overflow-hidden items-center">
        <div className="flex flex-col justify-center h-full max-w-90 text-center items-center">
          <h1 className="text-2xl mb-4 font-bold">
            Web Development With Passion
          </h1>

          <p className="text-xl italic">Based in Florida</p>
        </div>
      </div>
    </PageLayout>
  );
}
