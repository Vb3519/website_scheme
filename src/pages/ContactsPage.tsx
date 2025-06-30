import { GrContact } from 'react-icons/gr';

const ContactsPage = () => {
  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-10 justify-between overflow-y-auto">
      <section className="flex flex-col gap-4">
        <h2 className="text-center font-semibold text-2xl">
          Контакты для обратной связи
        </h2>
        <GrContact className="m-auto text-9xl text-gray-400/50" />
      </section>
    </main>
  );
};

export default ContactsPage;
