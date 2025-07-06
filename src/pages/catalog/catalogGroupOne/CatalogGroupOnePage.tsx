import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// Ui:
import CustomSection from '../../../shared/ui/CustomSection';
import BreadCrumbs from '../../../shared/ui/BreadCrumbs';
import CatalogFiltersForm from '../../../widgets/CatalogFiltersForm';
import GroupOneProductsList from './GroupOneProductsList';

// Api:
import { catalogProductsURL } from '../../../shared/api/catalogApi';

// Types:
import { AppDispatch } from '../../../app/redux/store';

// State:
import {
  selectCatalogProductsSlice,
  selectCurrentProductsGroupId,
  fetchProductsData,
} from '../../../app/redux/slices/catalogProductsSlice';

const CatalogGroupOnePage = () => {
  const dispatch: AppDispatch = useDispatch();

  const currentProductsGroupId: number | null = useSelector(
    selectCurrentProductsGroupId
  );
  const isDataLoading: boolean = useSelector(
    selectCatalogProductsSlice
  ).isLoading;

  const handleLoadCurrentGroupProductsData = (groupId: number) => {
    dispatch(fetchProductsData(`${catalogProductsURL}?vendorId=${groupId}`));
  };

  useEffect(() => {
    if (currentProductsGroupId) {
      handleLoadCurrentGroupProductsData(currentProductsGroupId);
    }
  }, []);

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

        <CatalogFiltersForm />

        {isDataLoading ? (
          <h2>...Идет загрузка...</h2>
        ) : (
          <>
            <h1 className="w-full text-left font-semibold">
              Группа товаров №1:
            </h1>

            <GroupOneProductsList />
          </>
        )}
      </CustomSection>
    </main>
  );
};

export default CatalogGroupOnePage;
