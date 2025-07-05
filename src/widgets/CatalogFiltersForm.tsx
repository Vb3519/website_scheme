const CatalogFiltersForm = () => {
  return (
    <form className="p-3 text-sm bg-[#f5f5f5] rounded-2xl grid grid-cols-2">
      {/* ----- Производители: ----- */}
      <fieldset className="pb-2 border-b-2 border-b-gray-200 flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <input id="devOne" type="checkbox"></input>
          <label htmlFor="devOne" className="mt-0.5 cursor-pointer">
            Производитель №1
          </label>
        </div>

        <div className="flex gap-2 items-center">
          <input id="devTwo" type="checkbox"></input>
          <label htmlFor="devTwo" className="mt-0.5 cursor-pointer">
            Производитель №2
          </label>
        </div>

        <div className="flex gap-2 items-center">
          <input id="devThree" type="checkbox"></input>
          <label htmlFor="devThree" className="mt-0.5 cursor-pointer">
            Производитель №3
          </label>
        </div>
      </fieldset>

      {/* ----- Избранное: ----- */}
      <fieldset className="pb-2 pl-2 border-b-2 border-b-gray-200 flex gap-2 items-center">
        <input id="onlyFav" type="checkbox"></input>
        <label htmlFor="onlyFav" className="mt-0.5 cursor-pointer">
          Только "избранное"
        </label>
      </fieldset>

      {/* ----- В наличии: ----- */}
      <fieldset className="pt-2 flex gap-2 items-center">
        <input id="inStock" type="checkbox"></input>
        <label htmlFor="inStock" className="mt-0.5 cursor-pointer">
          В наличии
        </label>
      </fieldset>

      {/* ----- Цена: ----- */}
      <fieldset className="pt-2">
        <p>Цена:</p>
        <div className="flex flex-col gap-2">
          <span>От 20 000 Руб.</span>
          <input type="range" step="100" min="20000" max="30000"></input>
        </div>

        <div className="flex flex-col gap-2">
          <span>До 30 000 Руб.</span>
          <input type="range" step="100" min="20000" max="30000"></input>
        </div>
      </fieldset>
    </form>
  );
};

export default CatalogFiltersForm;
