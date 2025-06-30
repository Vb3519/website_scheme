import { PiStarBold } from 'react-icons/pi';

const FavouritePage = () => {
  return (
    <main className="p-2 h-full flex-1 flex flex-col gap-10 justify-between overflow-y-auto">
      <section className="flex flex-col gap-4">
        <h2 className="text-center font-semibold text-2xl">Избранное</h2>
        <PiStarBold className="m-auto text-9xl text-gray-400/50" />
      </section>
    </main>
  );
};

export default FavouritePage;
