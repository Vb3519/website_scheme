import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// React-icons:
import { RiFileList3Line } from 'react-icons/ri';

// Ui:
import CustomSection from '../../shared/ui/CustomSection';
import BreadCrumbs from '../../shared/ui/BreadCrumbs';

// Types:
import { AppDispatch } from '../../app/redux/store';

// State:
import {
  setSelectedProductsGroupId,
  selectCurrentProductsGroupId,
} from '../../app/redux/slices/catalogProductsSlice';

const CatalogGeneralPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const currentProductsGroupId: number | null = useSelector(
    selectCurrentProductsGroupId
  );

  // Выбор id активной группы товаров:
  // ----------------------------------------
  const handleSetProductsGroupId = (groupId: number | null) => {
    dispatch(setSelectedProductsGroupId(groupId));
  };

  useEffect(() => {
    if (currentProductsGroupId !== null) {
      handleSetProductsGroupId(null);
    }
  }, []);

  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-10 justify-between overflow-y-auto">
      <CustomSection className="justify-start md:h-full lg:h-screen">
        <BreadCrumbs>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li className="text-black">
            <span>/</span> Каталог
          </li>
        </BreadCrumbs>

        <h1 className="text-center font-semibold text-2xl">Каталог товаров</h1>

        <ul className="m-auto w-full flex flex-col gap-4 justify-center md:flex-row">
          <ProductsGroupCard>
            <h2 className="font-semibold">Группа товаров №1</h2>
            <RiFileList3Line className="text-9xl text-gray-400/50" />
            <p>Текстовое описание группы товаров №1</p>
            <NavLink
              to="groupOne"
              className="ml-auto"
              onClick={() => {
                handleSetProductsGroupId(1);
              }}
            >
              Подробнее...
            </NavLink>
          </ProductsGroupCard>

          <ProductsGroupCard
            title="Группа товаров №2"
            icon={<RiFileList3Line className="text-9xl text-gray-400/50" />}
            description="Текстовое описание группы товаров №2"
            link={
              <NavLink
                to="groupTwo"
                className="ml-auto"
                onClick={() => {
                  handleSetProductsGroupId(2);
                }}
              >
                Подробнее...
              </NavLink>
            }
          />

          <ProductsGroupCard
            title="Группа товаров №3"
            icon={<RiFileList3Line className="text-9xl text-gray-400/50" />}
            description="Текстовое описание группы товаров №3"
            link={
              <NavLink
                to="groupThree"
                className="ml-auto"
                onClick={() => {
                  handleSetProductsGroupId(3);
                }}
              >
                Подробнее...
              </NavLink>
            }
          />
        </ul>
      </CustomSection>
    </main>
  );
};

export default CatalogGeneralPage;

type ProductsGroupCard_Props = React.LiHTMLAttributes<HTMLLIElement> & {
  title?: string;
  icon?: React.ReactNode;
  description?: string;
  link?: React.ReactNode;
  children?: React.ReactNode;
};

const ProductsGroupCard: React.FC<ProductsGroupCard_Props> = ({
  title,
  icon,
  description,
  link,
  children,
  ...props
}) => {
  return (
    <li
      className="p-3 flex flex-col gap-2 items-center justify-center bg-[#eaeaea] rounded-2xl"
      {...props}
    >
      <h2 className="font-semibold">{title}</h2>
      {icon}
      <p>{description}</p>
      {link}
      {children}
    </li>
  );
};
