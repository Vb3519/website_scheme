import { NavLink } from 'react-router-dom';

// React-icons:
import { GrContact } from 'react-icons/gr';

// Ui:
import CustomSection from '../shared/ui/CustomSection';
import BreadCrumbs from '../shared/ui/BreadCrumbs';
import ContactsFormWithUseState from '../widgets/ContactsFormWithUseState';

const ContactsPage = () => {
  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-10 justify-between overflow-y-auto">
      <CustomSection className="h-full justify-start lg:h-screen">
        <BreadCrumbs>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li className="text-black">
            <span>/</span> Контакты
          </li>
        </BreadCrumbs>

        <h1 className="text-center font-semibold text-2xl">
          Контакты для обратной связи
        </h1>

        <ContactsFormWithUseState />

        <GrContact className="m-auto text-9xl text-gray-400/50" />
      </CustomSection>
    </main>
  );
};

export default ContactsPage;
