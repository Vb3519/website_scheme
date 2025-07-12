import { useSelector, useDispatch } from 'react-redux';

// React-icons:
import { PiStarFill } from 'react-icons/pi';
import { LuShoppingCart } from 'react-icons/lu';

// Ui:
import ProductCard from '../../../shared/ui/ProductCard';
import CustomButton from '../../../shared/ui/CustomButton';

// Types:
import { AppDispatch } from '../../redux/store';

// State:
import {
  selectFavProductsList,
  removeProductFromFav,
} from '../../redux/slices/FavProductsSlice';

const FavProductsList = () => {
  const dispatch: AppDispatch = useDispatch();

  const currentFavProducts = useSelector(selectFavProductsList);

  const handleRemoveProductFromFav = (productId: number) => {
    dispatch(removeProductFromFav(productId));
  };

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {currentFavProducts.map((favProduct) => {
        return (
          <ProductCard
            key={favProduct.id}
            isInFav={favProduct.isInFav}
            icon={
              <PiStarFill
                className="text-3xl text-blue-400/50 cursor-pointer"
                onClick={() => {
                  handleRemoveProductFromFav(favProduct.id);
                }}
              />
            }
            manufacturer={favProduct.vendorTitle}
            title={favProduct.productTitle}
            groupTitle={favProduct.groupTitle}
            price={favProduct.price}
          >
            <CustomButton className="mt-2 flex gap-2 items-center justify-center">
              Купить <LuShoppingCart />
            </CustomButton>
          </ProductCard>
        );
      })}
    </ul>
  );
};

export default FavProductsList;
