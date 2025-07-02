import { RiFileChartLine } from 'react-icons/ri';
import { PiStarBold } from 'react-icons/pi';

// Ui:
import CustomSection from '../../shared/ui/CustomSection';
import ProductCard from '../../shared/ui/ProductCard';

const CatalogGroupOnePage = () => {
  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-10 justify-between overflow-y-auto">
      <CustomSection className="m-auto lg:h-screen">
        <h1 className="text-center">
          Это раздел каталога с группой товаров №1
        </h1>

        <ProductCard>
          <div className="pb-2 border-b-2 border-b-gray-200 flex">
            <RiFileChartLine className="m-auto text-9xl text-gray-400/50" />
            <PiStarBold className="text-3xl text-gray-400/50 cursor-pointer" />
          </div>

          <p>
            <span className="font-semibold">Производитель:</span> Пример
            производителя
          </p>
          <p>
            <span className="font-semibold">Название:</span> Пример названия
          </p>
          <p>
            <span className="font-semibold">Цена:</span> 1000 Руб.
          </p>
        </ProductCard>
      </CustomSection>
    </main>
  );
};

export default CatalogGroupOnePage;
