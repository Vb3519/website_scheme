import { useSelector, useDispatch } from 'react-redux';

// React-icons:
import { PiStarBold, PiStarFill } from 'react-icons/pi';
import { LuShoppingCart } from 'react-icons/lu';

// Ui:
import ProductCard from '../../../shared/ui/ProductCard';
import CustomButton from '../../../shared/ui/CustomButton';

// State:
import { selectCurrentProductsList } from '../../../app/redux/slices/catalogProductsSlice';
import {
  addProductToFav,
  removeProductFromFav,
  selectFavProductsList,
} from '../../../app/redux/slices/FavProductsSlice';

// Types:
import { AppDispatch } from '../../../app/redux/store';
import { Product_Props } from '../../../shared/types/Product_Props';

const GroupOneProductsList = () => {
  const dispatch: AppDispatch = useDispatch();

  const currentProductsList = useSelector(selectCurrentProductsList);
  const currentFavProducts = useSelector(selectFavProductsList);

  const handleToggleProductFav = (productData: Product_Props) => {
    const isAlrdyInFav: boolean = currentFavProducts.some(
      (productInfo) => productInfo.id === productData.id
    );

    if (isAlrdyInFav) {
      dispatch(removeProductFromFav(productData.id));
    } else {
      dispatch(addProductToFav(productData));
    }
  };

  return (
    <>
      {currentProductsList.length ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentProductsList.map((productInfo) => {
            const isInFav: boolean = currentFavProducts.some(
              (favProduct) => favProduct.id === productInfo.id
            );

            return (
              <ProductCard
                key={productInfo.id}
                isInFav={productInfo.isInFav}
                icon={
                  <span
                    onClick={() => {
                      handleToggleProductFav(productInfo);
                    }}
                  >
                    {isInFav ? (
                      <PiStarFill className="text-3xl text-blue-400/50 cursor-pointer" />
                    ) : (
                      <PiStarBold className="text-3xl text-gray-400/50 cursor-pointer" />
                    )}
                  </span>
                }
                manufacturer={productInfo.vendorTitle}
                groupTitle={productInfo.groupTitle}
                title={productInfo.productTitle}
                price={productInfo.price}
              >
                <CustomButton className="mt-2 flex gap-2 items-center justify-center">
                  Купить <LuShoppingCart />
                </CustomButton>
              </ProductCard>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};

export default GroupOneProductsList;
