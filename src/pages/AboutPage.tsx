import { NavLink } from 'react-router-dom';

// React-icons:
import { MdDesignServices } from 'react-icons/md';

// Ui:
import CustomSection from '../shared/ui/CustomSection';
import BreadCrumbs from '../shared/ui/BreadCrumbs';

const AboutPage = () => {
  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-10 justify-between overflow-y-auto">
      <CustomSection className="h-full justify-start lg:h-screen">
        <BreadCrumbs>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li className="text-black">
            <span>/</span> О компании
          </li>
        </BreadCrumbs>

        <h1 className="text-center font-semibold text-2xl">
          Информация о компании
        </h1>
        <MdDesignServices className="m-auto text-9xl text-gray-400/50" />
      </CustomSection>
    </main>
  );
};

export default AboutPage;
