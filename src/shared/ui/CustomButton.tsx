// Типизация пропсов компонента (вариант №1):
type CustomButton_Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
};

// Типизация пропсов компонента (вариант №2):
// interface CustomButton_Props
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
// }

const CustomButton: React.FC<CustomButton_Props> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={`p-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded-md cursor-pointer ${
        className || ''
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
