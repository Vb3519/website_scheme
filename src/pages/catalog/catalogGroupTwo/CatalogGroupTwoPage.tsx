import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Ui:
import CustomSection from '../../../shared/ui/CustomSection';
import BreadCrumbs from '../../../shared/ui/BreadCrumbs';
import CatalogGroupProductsList from '../../../app/features/allProducts/CatalogGroupProductsList';

import CatalogFiltersForm from '../../../widgets/CatalogFiltersForm';

// Api:
import { catalogProductsURL } from '../../../shared/api/catalogApi';

// Types:
import { AppDispatch } from '../../../app/redux/store';

// State:
import {
  setSelectedProductsGroupId,
  selectCatalogProductsSlice,
  selectCurrentProductsList,
  fetchProductsData,
} from '../../../app/redux/slices/catalogProductsSlice';

const CatalogGroupTwoPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const currentProductsList = useSelector(selectCurrentProductsList);
  const isDataLoading: boolean = useSelector(
    selectCatalogProductsSlice
  ).isLoading;

  // Выбор id активной группы товаров:
  // ----------------------------------------
  const handleSetProductsGroupId = (groupId: number | null) => {
    dispatch(setSelectedProductsGroupId(groupId));
  };

  const handleLoadCurrentGroupProductsData = (groupId: number) => {
    dispatch(fetchProductsData(`${catalogProductsURL}?groupId=${groupId}`));
  };

  useEffect(() => {
    handleSetProductsGroupId(2);
    handleLoadCurrentGroupProductsData(2);
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
            <span>/</span> Группа товаров №2
          </li>
        </BreadCrumbs>

        {isDataLoading ? (
          <div className="h-screen flex items-center">
            <h2 className="text-center font-semibold">...Идет загрузка...</h2>
          </div>
        ) : (
          <>
            {currentProductsList.length ? (
              <>
                <CatalogFiltersForm />

                <h1 className="w-full text-left font-semibold">
                  Группа товаров №2:
                </h1>

                <CatalogGroupProductsList />
              </>
            ) : (
              <div className="h-screen flex items-center">
                <h2 className="text-center font-semibold">...Нет данных...</h2>
              </div>
            )}
          </>
        )}
      </CustomSection>
    </main>
  );
};

export default CatalogGroupTwoPage;
