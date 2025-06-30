import { LuNotebookPen } from 'react-icons/lu';

// Ui:
import CustomSection from '../../shared/ui/CustomSection';

const CatalogPage = () => {
  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-10 justify-between overflow-y-auto">
      <CustomSection>
        <h1 className="text-center font-semibold text-2xl">Каталог товаров</h1>
        <LuNotebookPen className="m-auto text-9xl text-gray-400/50" />
      </CustomSection>
    </main>
  );
};

export default CatalogPage;
