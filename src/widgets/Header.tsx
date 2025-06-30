import { NavLink } from 'react-router-dom';

// React-icons:
import { GrCatalog } from 'react-icons/gr';

const Header = () => {
  return (
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
  );
};

export default Header;
