import { useDispatch, useSelector } from 'react-redux';

// React-icons:
import { PiStarBold, PiStarFill } from 'react-icons/pi';
import { LuShoppingCart } from 'react-icons/lu';

// Ui:
import ProductCard from '../../../shared/ui/ProductCard';
import CustomButton from '../../../shared/ui/CustomButton';

// State:
import { selectShoppingCartProductsList } from '../../redux/slices/shoppingCartSlice';
import { selectFavProductsList } from '../../redux/slices/FavProductsSlice';
import { removeProductFromCart } from '../../redux/slices/shoppingCartSlice';

// Types:
import { AppDispatch } from '../../redux/store';

const ProductsInCartList = () => {
  const dispatch: AppDispatch = useDispatch();

  const currentProductsInCartList = useSelector(selectShoppingCartProductsList);
  const currentFavProducts = useSelector(selectFavProductsList);

  // Убрать товар из корзины покупок:
  // ---------------------------------------
  const handleRemoveProductFromShoppingCart = (productId: number) => {
    dispatch(removeProductFromCart(productId));
  };

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {currentProductsInCartList.length
        ? currentProductsInCartList.map((productData) => {
            const isInFav: boolean = currentFavProducts.some(
              (favProduct) => favProduct.id === productData.id
            );

            return (
              <ProductCard
                key={productData.id}
                isInFav={productData.isInFav}
                icon={
                  isInFav ? (
                    <PiStarFill className="text-3xl text-blue-400/50 cursor-pointer" />
                  ) : (
                    <PiStarBold className="text-3xl text-gray-400/50 cursor-pointer" />
                  )
                }
                manufacturer={productData.vendorTitle}
                title={productData.productTitle}
                groupTitle={productData.groupTitle}
                price={productData.price}
              >
                <CustomButton
                  className="mt-2 flex gap-2 items-center justify-center"
                  onClick={() => {
                    handleRemoveProductFromShoppingCart(productData.id);
                  }}
                >
                  Убрать из корзины <LuShoppingCart />
                </CustomButton>
              </ProductCard>
            );
          })
        : null}
    </ul>
  );
};

export default ProductsInCartList;
