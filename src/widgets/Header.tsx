import { NavLink } from 'react-router-dom';

// React-icons:
import { GrCatalog } from 'react-icons/gr';
import { PiStarBold } from 'react-icons/pi';
import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="p-2 flex gap-4 items-center flex-wrap bg-[#f5f5f5]">
      <NavLink className="cursor-pointer" to="/">
        <GrCatalog className="text-2xl text-gray-600/50" />
      </NavLink>
      <nav>
        <ul className="flex gap-2">
          <li className="cursor-pointer">
            <NavLink to="about">О компании</NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="catalog">Каталог</NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="contacts">Контакты</NavLink>
          </li>
        </ul>
      </nav>

      <ul className="ml-auto hidden gap-4 justify-between lg:flex">
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
    </header>
  );
};

export default Header;
