// Типизация компонента (Вариант №1):
type ProductCard_Props = React.LiHTMLAttributes<HTMLLIElement> & {
  className?: string;
  children?: React.ReactNode;
};

// Типизация компонента (Вариант №2):
// interface ProductCard_Props extends React.LiHTMLAttributes<HTMLLIElement> {
//   className: string;
//   children: React.ReactNode;
// }

const ProductCard: React.FC<ProductCard_Props> = ({
  className,
  children,
  ...props
}: ProductCard_Props) => {
  return (
    <li
      className={`p-2 flex flex-col gap-2 border-2 border-gray-300 rounded-2xl ${
        className ? className : ''
      }`}
      {...props}
    >
      {children}
    </li>
  );
};

export default ProductCard;
