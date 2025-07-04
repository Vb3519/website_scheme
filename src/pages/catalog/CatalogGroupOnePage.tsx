import { NavLink } from 'react-router-dom';

// React-icons:
import { PiStarBold } from 'react-icons/pi';
import { LuShoppingCart } from 'react-icons/lu';

// Ui:
import CustomSection from '../../shared/ui/CustomSection';
import BreadCrumbs from '../../shared/ui/BreadCrumbs';
import ProductCard from '../../shared/ui/ProductCard';
import CustomButton from '../../shared/ui/CustomButton';

const CatalogGroupOnePage = () => {
  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-10 justify-between overflow-y-auto">
      <CustomSection className="justify-start">
        <BreadCrumbs>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">
              <span className="text-black">/</span> Каталог
            </NavLink>
          </li>
          <li className="text-black">
            <span>/</span> Группа товаров №1
          </li>
        </BreadCrumbs>

        <h1 className="w-full text-left font-semibold">Группа товаров №1:</h1>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            icon={
              <PiStarBold className="text-3xl text-gray-400/50 cursor-pointer" />
            }
            manufacturer="Пример
            производителя"
            title="Пример названия"
            price="1000"
          >
            <CustomButton className="mt-2 flex gap-2 items-center justify-center">
              Купить <LuShoppingCart />
            </CustomButton>
          </ProductCard>

          <ProductCard
            icon={
              <PiStarBold className="text-3xl text-gray-400/50 cursor-pointer" />
            }
            manufacturer="Пример
            производителя"
            title="Пример названия"
            price="1000"
          >
            <CustomButton className="mt-2 flex gap-2 items-center justify-center">
              Купить <LuShoppingCart />
            </CustomButton>
          </ProductCard>

          <ProductCard
            icon={
              <PiStarBold className="text-3xl text-gray-400/50 cursor-pointer" />
            }
            manufacturer="Пример
            производителя"
            title="Пример названия"
            price="1000"
          >
            <CustomButton className="mt-2 flex gap-2 items-center justify-center">
              Купить <LuShoppingCart />
            </CustomButton>
          </ProductCard>

          <ProductCard
            icon={
              <PiStarBold className="text-3xl text-gray-400/50 cursor-pointer" />
            }
            manufacturer="Пример
            производителя"
            title="Пример названия"
            price="1000"
          >
            <CustomButton className="mt-2 flex gap-2 items-center justify-center">
              Купить <LuShoppingCart />
            </CustomButton>
          </ProductCard>

          <ProductCard
            icon={
              <PiStarBold className="text-3xl text-gray-400/50 cursor-pointer" />
            }
            manufacturer="Пример
            производителя"
            title="Пример названия"
            price="1000"
          >
            <CustomButton className="mt-2 flex gap-2 items-center justify-center">
              Купить <LuShoppingCart />
            </CustomButton>
          </ProductCard>

          <ProductCard
            icon={
              <PiStarBold className="text-3xl text-gray-400/50 cursor-pointer" />
            }
            manufacturer="Пример
            производителя"
            title="Пример названия"
            price="1000"
          >
            <CustomButton className="mt-2 flex gap-2 items-center justify-center">
              Купить <LuShoppingCart />
            </CustomButton>
          </ProductCard>

          <ProductCard
            icon={
              <PiStarBold className="text-3xl text-gray-400/50 cursor-pointer" />
            }
            manufacturer="Пример
            производителя"
            title="Пример названия"
            price="1000"
          >
            <CustomButton className="mt-2 flex gap-2 items-center justify-center">
              Купить <LuShoppingCart />
            </CustomButton>
          </ProductCard>

          <ProductCard
            icon={
              <PiStarBold className="text-3xl text-gray-400/50 cursor-pointer" />
            }
            manufacturer="Пример
            производителя"
            title="Пример названия"
            price="1000"
          >
            <CustomButton className="mt-2 flex gap-2 items-center justify-center">
              Купить <LuShoppingCart />
            </CustomButton>
          </ProductCard>

          <ProductCard
            icon={
              <PiStarBold className="text-3xl text-gray-400/50 cursor-pointer" />
            }
            manufacturer="Пример
            производителя"
            title="Пример названия"
            price="1000"
          >
            <CustomButton className="mt-2 flex gap-2 items-center justify-center">
              Купить <LuShoppingCart />
            </CustomButton>
          </ProductCard>
        </ul>
      </CustomSection>
    </main>
  );
};

export default CatalogGroupOnePage;
