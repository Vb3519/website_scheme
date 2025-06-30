import { GrCatalog } from 'react-icons/gr';
import { AiOutlineProduct } from 'react-icons/ai';
import { FaRegFolderOpen } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { FaTruck } from 'react-icons/fa';
import { LuNotebookPen } from 'react-icons/lu';
import { GrContact } from 'react-icons/gr';

// Favourite & Cart:
import { PiStarBold } from 'react-icons/pi';
import { FiShoppingCart } from 'react-icons/fi';

// Socials:
import { FaVk } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const App = () => {
  return (
    <div className="h-screen flex flex-col font-[Roboto]">
      {/* ---------------------------------------- */}
      {/* ----- Хеадер (навигационное меню): ----- */}
      {/* ---------------------------------------- */}
      <header className="p-2 flex gap-4 items-center flex-wrap bg-[#f5f5f5]">
        <div className="cursor-pointer">
          <GrCatalog className="text-2xl text-gray-600/50" />
        </div>
        <nav>
          <ul className="flex gap-2">
            <li className="cursor-pointer">О компании</li>
            <li className="cursor-pointer">Каталог</li>
            <li className="cursor-pointer">Контакты</li>
          </ul>
        </nav>
      </header>

      {/* ----------------------------------- */}
      {/* ----- Главная страница сайта: ----- */}
      {/* ----------------------------------- */}
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

        <section className="flex flex-col gap-4">
          <h2 className="text-center font-semibold text-2xl">
            Каталог товаров
          </h2>
          <LuNotebookPen className="m-auto text-9xl text-gray-400/50" />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-center font-semibold text-2xl">
            Контакты для обратной связи
          </h2>
          <GrContact className="m-auto text-9xl text-gray-400/50" />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-center font-semibold text-2xl">Корзина</h2>
          <FiShoppingCart className="m-auto text-9xl text-gray-400/50" />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-center font-semibold text-2xl">Избранное</h2>
          <PiStarBold className="m-auto text-9xl text-gray-400/50" />
        </section>
      </main>

      {/* ----------------------------------- */}
      {/* ------------- Футер: -------------- */}
      {/* ----------------------------------- */}
      <footer className="p-2 flex flex-col gap-2 bg-[#f5f5f5]">
        <ul className="flex gap-4 justify-between">
          <li className="flex flex-col items-center justify-center cursor-pointer">
            <PiStarBold className="text-3xl text-gray-600/50" />{' '}
            <span className="text-gray-400/50">Избранное</span>
          </li>
          <li className="flex flex-col items-center justify-center cursor-pointer">
            <FiShoppingCart className="text-3xl text-gray-600/50" />{' '}
            <span className="text-gray-400/50">Корзина</span>
          </li>
        </ul>

        <p>2025 © Схема веб-сайта</p>

        <div className="flex flex-col gap-2">
          <p>Мы в соц. сетях:</p>
          <ul className="flex gap-2">
            <li className="rounded-[50%] w-10 h-10 flex items-center justify-center bg-[#1b9ae9] text-[whitesmoke] text-2xl cursor-pointer">
              <FaVk />
            </li>
            <li className="rounded-[50%] w-10 h-10 flex items-center justify-center bg-[#39a150] text-[whitesmoke] text-2xl cursor-pointer">
              <FaWhatsapp />
            </li>
            <li className="rounded-[50%] w-10 h-10 flex items-center justify-center bg-[#2ea5f0] text-[whitesmoke] text-2xl cursor-pointer">
              <FaTelegramPlane />
            </li>
          </ul>
        </div>

        <p>
          Разработка сайта -{' '}
          <span className="text-gray-400/50 font-semibold">
            Бордюгов Виктор
          </span>
        </p>
      </footer>
    </div>
  );
};

export default App;
