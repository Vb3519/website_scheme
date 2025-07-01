// Ui:
import CustomSection from '../../shared/ui/CustomSection';

const CatalogGroupTwoPage = () => {
  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-10 justify-between overflow-y-auto">
      <CustomSection className="m-auto lg:h-screen">
        <h1 className="text-center">
          Это раздел каталога с группой товаров №2
        </h1>
      </CustomSection>
    </main>
  );
};

export default CatalogGroupTwoPage;
