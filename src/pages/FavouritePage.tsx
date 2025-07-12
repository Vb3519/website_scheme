import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// React-icons:
import { PiStarBold } from 'react-icons/pi';

// Ui:
import CustomSection from '../shared/ui/CustomSection';
import BreadCrumbs from '../shared/ui/BreadCrumbs';
import FavProductsList from '../app/features/favProducts/favProductsList';

// State:
import { selectFavProductsList } from '../app/redux/slices/FavProductsSlice';

const FavouritePage = () => {
  const currentFavProducts = useSelector(selectFavProductsList);

  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-10 justify-between overflow-y-auto">
      <CustomSection className="h-full justify-start lg:h-screen">
        <BreadCrumbs>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li className="text-black">
            <span>/</span> Избранное
          </li>
        </BreadCrumbs>

        <h1 className="text-center font-semibold text-2xl">Избранное</h1>

        {currentFavProducts.length ? (
          <FavProductsList />
        ) : (
          <PiStarBold className="m-auto text-9xl text-gray-400/50" />
        )}
      </CustomSection>
    </main>
  );
};

export default FavouritePage;
