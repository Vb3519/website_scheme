import { NavLink } from 'react-router-dom';

// React-icons:
import { LuNotebookPen } from 'react-icons/lu';
import { RiFileList3Line } from 'react-icons/ri';

// Ui:
import CustomSection from '../../shared/ui/CustomSection';

const CatalogPage = () => {
  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-10 justify-between overflow-y-auto">
      <CustomSection className="justify-start md:h-full lg:h-screen">
        <h1 className="text-center font-semibold text-2xl">Каталог товаров</h1>

        <ul className="w-full flex flex-col gap-4 justify-center md:flex-row">
          <ProductsGroupCard>
            <h2 className="font-semibold">Группа товаров №1</h2>
            <RiFileList3Line className="text-9xl text-gray-400/50" />
            <p>Текстовое описание группы товаров №1</p>
            <NavLink to="groupOne" className="ml-auto">
              Подробнее...
            </NavLink>
          </ProductsGroupCard>

          <ProductsGroupCard
            title="Группа товаров №2"
            icon={<RiFileList3Line className="text-9xl text-gray-400/50" />}
            description="Текстовое описание группы товаров №2"
            link={
              <NavLink to="groupTwo" className="ml-auto">
                Подробнее...
              </NavLink>
            }
          />

          <ProductsGroupCard
            title="Группа товаров №3"
            icon={<RiFileList3Line className="text-9xl text-gray-400/50" />}
            description="Текстовое описание группы товаров №3"
            link={
              <NavLink to="groupThree" className="ml-auto">
                Подробнее...
              </NavLink>
            }
          />
        </ul>
      </CustomSection>
    </main>
  );
};

export default CatalogPage;

type ProductsGroupCard_Props = React.LiHTMLAttributes<HTMLLIElement> & {
  title?: string;
  icon?: React.ReactNode;
  description?: string;
  link?: React.ReactNode;
  children?: React.ReactNode;
};

const ProductsGroupCard: React.FC<ProductsGroupCard_Props> = ({
  title,
  icon,
  description,
  link,
  children,
  ...props
}) => {
  return (
    <li
      className="p-3 flex flex-col gap-2 items-center justify-center bg-[#eaeaea] rounded-2xl"
      {...props}
    >
      <h2 className="font-semibold">{title}</h2>
      {icon}
      <p>{description}</p>
      {link}
      {children}
    </li>
  );
};
