import { AiOutlineProduct } from 'react-icons/ai';
import { FaRegFolderOpen } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { FaTruck } from 'react-icons/fa';

const GeneralPage = () => {
  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-10 justify-between overflow-y-auto">
      <section className="flex flex-col gap-4">
        <h1 className="text-center font-semibold text-2xl">
          Главная страница сайта
        </h1>
        <AiOutlineProduct className="m-auto text-9xl text-gray-400/50" />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-center font-semibold text-2xl">Рекламный блок</h2>
        <FaRegFolderOpen className="m-auto text-9xl text-gray-400/50" />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-center font-semibold text-2xl">
          Информация о компании
        </h2>
        <MdDesignServices className="m-auto text-9xl text-gray-400/50" />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-center font-semibold text-2xl">
          Информация об услугах компании
        </h2>
        <FaTruck className="m-auto text-9xl text-gray-400/50" />
      </section>
    </main>
  );
};

export default GeneralPage;
