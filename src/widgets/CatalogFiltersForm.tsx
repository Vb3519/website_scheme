import { useSelector, useDispatch } from 'react-redux';

// Types:
import { AppDispatch } from '../app/redux/store';

// State:
import { selectCurrentProductsGroupId } from '../app/redux/slices/catalogProductsSlice';
import {
  selectDevelopersFilter,
  toggleDevOne,
  toggleDevTwo,
  toggleDevThree,
} from '../app/redux/slices/groupOneFilterSlice';

const CatalogFiltersForm = () => {
  const dispatch: AppDispatch = useDispatch();

  const currentProductsGoupId: number | null = useSelector(
    selectCurrentProductsGroupId
  );
  const currentDevFilters = useSelector(selectDevelopersFilter);

  const handleToggleDevelopersFilter = (devTitle: string) => {
    switch (devTitle) {
      case 'Производитель №1': {
        dispatch(toggleDevOne());
        break;
      }

      case 'Производитель №2': {
        dispatch(toggleDevTwo());
        break;
      }

      case 'Производитель №3': {
        dispatch(toggleDevThree());
        break;
      }

      default:
        return;
    }
  };

  return (
    <form className="w-full p-3 bg-[#f5f5f5] rounded-2xl grid grid-cols-1 xs:grid-cols-2">
      {/* ----- Производители: ----- */}
      <fieldset className="pb-2 border-b-2 border-b-gray-200 flex flex-col gap-1">
        <p className="font-semibold">Производители:</p>
        <div className="flex gap-2 items-center">
          <input
            id="devOne"
            type="checkbox"
            checked={currentDevFilters.devOne}
            onChange={() => {
              handleToggleDevelopersFilter('Производитель №1');
            }}
          ></input>
          <label htmlFor="devOne" className="mt-0.5 cursor-pointer">
            Производитель №1
          </label>
        </div>

        <div className="flex gap-2 items-center">
          <input
            id="devTwo"
            type="checkbox"
            checked={currentDevFilters.devTwo}
            onChange={() => {
              handleToggleDevelopersFilter('Производитель №2');
            }}
          ></input>
          <label htmlFor="devTwo" className="mt-0.5 cursor-pointer">
            Производитель №2
          </label>
        </div>

        <div className="flex gap-2 items-center">
          <input
            id="devThree"
            type="checkbox"
            checked={currentDevFilters.devThree}
            onChange={() => {
              handleToggleDevelopersFilter('Производитель №3');
            }}
          ></input>
          <label htmlFor="devThree" className="mt-0.5 cursor-pointer">
            Производитель №3
          </label>
        </div>
      </fieldset>

      {/* ----- Избранное: ----- */}
      <fieldset className="py-2 border-b-2 border-b-gray-200 flex flex-col gap-1 items-start xs:p-0">
        <p className="font-semibold">Только "избранное":</p>
        <div className="flex gap-2 items-center">
          <input id="onlyFav" type="checkbox"></input>
          <label htmlFor="onlyFav" className="mt-0.5 cursor-pointer">
            Да
          </label>
        </div>
      </fieldset>

      {/* ----- В наличии: ----- */}
      <fieldset className="py-2 border-b-2 border-b-gray-200 flex flex-col gap-1 items-start xs:border-0">
        <p className="font-semibold">Статус:</p>
        <div className="flex gap-2 items-center">
          <input id="inStock" type="checkbox"></input>
          <label htmlFor="inStock" className="mt-0.5 cursor-pointer">
            В наличии
          </label>
        </div>
      </fieldset>

      {/* ----- Цена: ----- */}
      <fieldset className="pt-2 flex flex-col gap-1">
        <p className="font-semibold">Цена:</p>
        <div className="flex flex-col gap-2">
          <span>От 20 000 Руб.</span>
          <input type="range" step="100" min="20000" max="30000"></input>
        </div>

        <div className="flex flex-col gap-2">
          <span>До 30 000 Руб.</span>
          <input type="range" step="100" min="20000" max="30000"></input>
        </div>
      </fieldset>
    </form>
  );
};

export default CatalogFiltersForm;
