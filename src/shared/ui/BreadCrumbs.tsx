type BreadCrumbs_Props = React.HTMLAttributes<HTMLUListElement>;

const BreadCrumbs: React.FC<BreadCrumbs_Props> = ({ className, children }) => {
  return (
    <ul
      className={`mr-auto flex gap-1 flex-wrap text-blue-500 ${
        className || ''
      }`}
    >
      {children}
    </ul>
  );
};

export default BreadCrumbs;
