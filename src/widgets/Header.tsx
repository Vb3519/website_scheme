import { NavLink } from 'react-router-dom';

// React-icons:
import { GrCatalog } from 'react-icons/gr';

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
    </header>
  );
};

export default Header;
