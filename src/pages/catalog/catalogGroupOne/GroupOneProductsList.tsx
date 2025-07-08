import { useSelector } from 'react-redux';

// React-icons:
import { PiStarBold } from 'react-icons/pi';
import { LuShoppingCart } from 'react-icons/lu';

// Ui:
import ProductCard from '../../../shared/ui/ProductCard';
import CustomButton from '../../../shared/ui/CustomButton';

// State:
import { selectCurrentProductsList } from '../../../app/redux/slices/catalogProductsSlice';

const GroupOneProductsList = () => {
  const currentProductsList = useSelector(selectCurrentProductsList);

  return (
    <>
      {currentProductsList.length ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentProductsList.map((productInfo) => {
            return (
              <ProductCard
                key={productInfo.id}
                icon={
                  <PiStarBold className="text-3xl text-gray-400/50 cursor-pointer" />
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
      ) : (
        <h2 className="h-[70vh]">...Нет данных...</h2>
      )}
    </>
  );
};

export default GroupOneProductsList;
