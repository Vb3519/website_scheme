import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// Favourite & Cart:
import { PiStarBold } from 'react-icons/pi';
import { FiShoppingCart } from 'react-icons/fi';

// Socials:
import { FaVk } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

// State:
import { selectFavProductsList } from '../app/redux/slices/FavProductsSlice';
import { selectShoppingCartProductsList } from '../app/redux/slices/shoppingCartSlice';

const Footer = () => {
  const currentFavProducts = useSelector(selectFavProductsList);
  const currentProductsInCartList = useSelector(selectShoppingCartProductsList);

  return (
    <footer className="p-2 flex flex-col gap-2 bg-[#f5f5f5] lg:flex-row lg:justify-between lg:py-4">
      <ul className="flex gap-4 justify-center lg:hidden">
        <li className="relative">
          <NavLink
            to="favourite"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <PiStarBold className="text-3xl text-gray-600/50" />{' '}
            <span className="text-gray-400/50">Избранное</span>
            <div className="absolute top-0 right-4 flex items-center justify-center w-6 h-6 rounded-[50%] bg-blue-400 font-semibold text-[whitesmoke]">
              <span className="mt-0.5">{currentFavProducts.length || 0}</span>
            </div>
          </NavLink>
        </li>
        <li className="relative">
          <NavLink
            to="cart"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <FiShoppingCart className="text-3xl text-gray-600/50" />{' '}
            <span className="text-gray-400/50">Корзина</span>
            <div className="absolute top-0 right-1 flex items-center justify-center w-6 h-6 rounded-[50%] bg-blue-400 font-semibold text-[whitesmoke]">
              <span className="mt-0.5">
                {currentProductsInCartList.length || 0}
              </span>
            </div>
          </NavLink>
        </li>
      </ul>

      <div className="hidden flex-col items-center gap-2 lg:flex lg:flex-row lg:gap-3">
        <p>2025 © Схема веб-сайта</p>

        <div className="flex flex-col items-center gap-2 border-l-1 border-gray-400/50 lg:flex-row lg:pl-3">
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
      </div>

      <p className="hidden my-auto lg:block">
        Разработка сайта -{' '}
        <span className="text-gray-400/50 font-semibold">Бордюгов Виктор</span>
      </p>
    </footer>
  );
};

export default Footer;
