import { PiStarBold } from 'react-icons/pi';

// Ui:
import CustomSection from '../shared/ui/CustomSection';

const FavouritePage = () => {
  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-10 justify-between overflow-y-auto">
      <CustomSection className="h-full lg:h-screen">
        <h1 className="text-center font-semibold text-2xl">Избранное</h1>
        <PiStarBold className="text-9xl text-gray-400/50" />
      </CustomSection>
    </main>
  );
};

export default FavouritePage;
