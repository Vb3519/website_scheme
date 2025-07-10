import { RiFileChartLine } from 'react-icons/ri';

// Типизация компонента (Вариант №1):
type ProductCard_Props = React.LiHTMLAttributes<HTMLLIElement> & {
  className?: string;
  isInFav: boolean;
  icon: React.ReactNode;
  manufacturer: string;
  title: string;
  groupTitle: string;
  price: number;
  children?: React.ReactNode;
};

// Типизация компонента (Вариант №2):
// interface ProductCard_Props extends React.LiHTMLAttributes<HTMLLIElement> {
//   className: string;
//   children: React.ReactNode;
// }

const ProductCard: React.FC<ProductCard_Props> = ({
  className,
  isInFav,
  icon,
  manufacturer,
  title,
  groupTitle,
  price,
  children,
  ...props
}: ProductCard_Props) => {
  return (
    <li
      className={`p-4 flex flex-col gap-2 border-2 border-gray-300 rounded-2xl ${
        className ? className : ''
      }`}
      {...props}
    >
      <div className="pb-2 border-b-2 border-b-gray-200 flex">
        <RiFileChartLine className="m-auto text-9xl text-gray-400/50" />
        {icon}
      </div>
      <p>
        <span className="font-semibold">Производитель:</span> {manufacturer}
      </p>
      <p>
        <span className="font-semibold">Группа товаров:</span> {groupTitle}
      </p>
      <p>
        <span className="font-semibold">Название:</span> {title}
      </p>
      <p>
        <span className="font-semibold">Цена:</span> {price} Руб.
      </p>
      {children}
    </li>
  );
};

export default ProductCard;
