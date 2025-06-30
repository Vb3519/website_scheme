import { GrContact } from 'react-icons/gr';

// Ui:
import CustomSection from '../shared/ui/CustomSection';

const ContactsPage = () => {
  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-10 justify-between overflow-y-auto">
      <CustomSection>
        <h1 className="text-center font-semibold text-2xl">
          Контакты для обратной связи
        </h1>
        <GrContact className="m-auto text-9xl text-gray-400/50" />
      </CustomSection>
    </main>
  );
};

export default ContactsPage;
