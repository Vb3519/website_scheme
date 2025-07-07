import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// React-icons:
import { PiStarBold } from 'react-icons/pi';
import { LuShoppingCart } from 'react-icons/lu';

// Ui:
import CustomSection from '../../../shared/ui/CustomSection';
import BreadCrumbs from '../../../shared/ui/BreadCrumbs';
import CatalogFiltersForm from '../../../widgets/CatalogFiltersForm';
import GroupThreeProductsList from './GroupThreeProductsList';

// Api:
import { catalogProductsURL } from '../../../shared/api/catalogApi';

// Types:
import { AppDispatch } from '../../../app/redux/store';

// State:
import {
  selectCatalogProductsSlice,
  setSelectedProductsGroupId,
  fetchProductsData,
} from '../../../app/redux/slices/catalogProductsSlice';

const CatalogGroupThreePage = () => {
  const dispatch: AppDispatch = useDispatch();

  const isDataLoading: boolean = useSelector(
    selectCatalogProductsSlice
  ).isLoading;

  // Выбор id активной группы товаров:
  // ----------------------------------------
  const handleSetProductsGroupId = (groupId: number | null) => {
    dispatch(setSelectedProductsGroupId(groupId));
  };

  const handleLoadCurrentGroupProductsData = (groupId: number) => {
    dispatch(fetchProductsData(`${catalogProductsURL}?vendorId=${groupId}`));
  };

  useEffect(() => {
    handleSetProductsGroupId(3);
    handleLoadCurrentGroupProductsData(3);
  }, []);

  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-10 justify-between overflow-y-auto">
      <CustomSection className="justify-start lg:min-h-screen">
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
            <span>/</span> Группа товаров №3
          </li>
        </BreadCrumbs>

        {isDataLoading ? (
          <div className="h-screen flex items-center">
            <h2 className="text-center font-semibold">...Идет загрузка...</h2>
          </div>
        ) : (
          <>
            <CatalogFiltersForm />

            <h1 className="w-full text-left font-semibold">
              Группа товаров №3:
            </h1>

            <GroupThreeProductsList />
          </>
        )}
      </CustomSection>
    </main>
  );
};

export default CatalogGroupThreePage;
