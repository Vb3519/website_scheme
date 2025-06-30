import { MdDesignServices } from 'react-icons/md';

const AboutPage = () => {
  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-10 justify-between overflow-y-auto">
      <section className="flex flex-col gap-4">
        <h2 className="text-center font-semibold text-2xl">
          Информация о компании
        </h2>
        <MdDesignServices className="m-auto text-9xl text-gray-400/50" />
      </section>
    </main>
  );
};

export default AboutPage;
