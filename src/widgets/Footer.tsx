import { NavLink } from 'react-router-dom';

// Favourite & Cart:
import { PiStarBold } from 'react-icons/pi';
import { FiShoppingCart } from 'react-icons/fi';

// Socials:
import { FaVk } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-2 flex flex-col gap-2 bg-[#f5f5f5]">
      <ul className="flex gap-4 justify-between">
        <li>
          <NavLink
            to="favourite"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <PiStarBold className="text-3xl text-gray-600/50" />{' '}
            <span className="text-gray-400/50">Избранное</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="cart"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <FiShoppingCart className="text-3xl text-gray-600/50" />{' '}
            <span className="text-gray-400/50">Корзина</span>
          </NavLink>
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
        <span className="text-gray-400/50 font-semibold">Бордюгов Виктор</span>
      </p>
    </footer>
  );
};

export default Footer;
