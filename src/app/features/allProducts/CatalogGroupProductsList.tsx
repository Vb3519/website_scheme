import { useSelector, useDispatch } from 'react-redux';

// React-icons:
import { PiStarBold, PiStarFill } from 'react-icons/pi';
import { LuShoppingCart } from 'react-icons/lu';

// Ui:
import ProductCard from '../../../shared/ui/ProductCard';
import CustomButton from '../../../shared/ui/CustomButton';

// State:
import { selectCurrentProductsList } from '../../redux/slices/catalogProductsSlice';
import {
  selectDevelopersFilter,
  selectOnlyFavFilter,
  selectOnlyIsInStockFilter,
  selectPriceFilter,
} from '../../redux/slices/groupOneFilterSlice';

import {
  addProductToFav,
  removeProductFromFav,
  selectFavProductsList,
} from '../../redux/slices/FavProductsSlice';

import {
  addProductToCart,
  selectShoppingCartProductsList,
} from '../../redux/slices/shoppingCartSlice';

// Types:
import { AppDispatch } from '../../redux/store';
import { Product_Props } from '../../../shared/types/Product_Props';

const CatalogGroupProductsList = () => {
  const dispatch: AppDispatch = useDispatch();

  const currentProductsList = useSelector(selectCurrentProductsList);
  const currentFavProducts = useSelector(selectFavProductsList);
  const currentProductsInShoppingCart = useSelector(
    selectShoppingCartProductsList
  );

  //  Фильтры:
  const currentDevelopersFilter = useSelector(selectDevelopersFilter);
  const currentFavFilter = useSelector(selectOnlyFavFilter);
  const currentIsInStockFilter = useSelector(selectOnlyIsInStockFilter);
  const currentPriceFilter = useSelector(selectPriceFilter);

  // Добавить товар в избранное:
  // -----------------------------------
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

  // Добавить товар в корзину покупок:
  // ------------------------------------
  const handleAddProductToCart = (productData: Product_Props) => {
    const isAlrdyInCart: boolean = currentProductsInShoppingCart.some(
      (productInCartData) => productInCartData.id === productData.id
    );

    if (isAlrdyInCart) return;

    dispatch(addProductToCart(productData));
  };

  // ------------------------------------
  // Фильтры:
  // ------------------------------------
  const filteredProductsList: Product_Props[] = currentProductsList.filter(
    (product) => {
      // Производители:
      const userSelectedDevelopers: string[] = [];

      if (currentDevelopersFilter.devOne) {
        userSelectedDevelopers.push('Производитель №1');
      }

      if (currentDevelopersFilter.devTwo) {
        userSelectedDevelopers.push('Производитель №2');
      }

      if (currentDevelopersFilter.devThree) {
        userSelectedDevelopers.push('Производитель №3');
      }

      const matchesSelectedDevelopers: boolean = userSelectedDevelopers.length
        ? userSelectedDevelopers.some((developer: string) => {
            return product.vendorTitle
              .toLocaleLowerCase()
              .includes(developer.toLowerCase());
          })
        : true;

      // Только "избранное":
      // const matchesOnlyFav: boolean = currentFavFilter ? product.isInFav : true;

      const matchesOnlyFav: boolean = currentFavFilter
        ? currentFavProducts.length
          ? currentFavProducts.some((favProduct) => {
              return favProduct.id === product.id;
            })
          : false
        : true;

      // Товары только в наличии:
      // ------------------------------
      const matchesIsInStock: boolean = currentIsInStockFilter
        ? product.isInStock
        : true;

      // Цена товара:
      // ------------------------------
      const matchesMinPrice: boolean =
        product.price >= currentPriceFilter.minPrice;

      const matchesMaxPrice: boolean =
        product.price <= currentPriceFilter.maxPrice;

      return (
        matchesSelectedDevelopers &&
        matchesOnlyFav &&
        matchesIsInStock &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    }
  );

  return (
    <>
      {currentProductsList.length ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProductsList.map((productInfo) => {
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
                <CustomButton
                  className="mt-2 flex gap-2 items-center justify-center"
                  onClick={() => {
                    handleAddProductToCart(productInfo);
                  }}
                >
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

export default CatalogGroupProductsList;
