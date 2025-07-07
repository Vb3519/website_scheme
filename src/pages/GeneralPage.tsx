// React-icons:
import { AiOutlineProduct } from 'react-icons/ai';
import { FaRegFolderOpen } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { FaTruck } from 'react-icons/fa';

// Ui:
import CustomSection from '../shared/ui/CustomSection';

const GeneralPage = () => {
  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-20 justify-between overflow-y-auto">
      <CustomSection>
        <h1 className="text-center font-semibold text-2xl">
          Главная страница сайта
        </h1>
        <AiOutlineProduct className="m-auto text-9xl text-gray-400/50" />
      </CustomSection>

      <CustomSection
        title="Рекламный блок"
        icon={<FaRegFolderOpen className="m-auto text-9xl text-gray-400/50" />}
      />

      <CustomSection
        title="Информация о компании"
        icon={<MdDesignServices className="m-auto text-9xl text-gray-400/50" />}
      />

      <CustomSection
        title="Информация об услугах компании"
        icon={<FaTruck className="m-auto text-9xl text-gray-400/50" />}
      />
    </main>
  );
};

export default GeneralPage;
