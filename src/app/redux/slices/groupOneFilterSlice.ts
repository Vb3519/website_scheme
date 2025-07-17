import { createSlice } from '@reduxjs/toolkit';

// Types:
interface GroupOneFilterState {
  developers: {
    devOne: boolean;
    devTwo: boolean;
    devThree: boolean;
  };
  onlyFav: boolean;
  onlyInStock: boolean;
  price: {
    minPrice: number;
    maxPrice: number;
  };
}

interface GroupOneFilterSlice {
  groupOneFilter: GroupOneFilterState;
}

const initialState: GroupOneFilterState = {
  developers: {
    devOne: false,
    devTwo: false,
    devThree: false,
  },
  onlyFav: false,
  onlyInStock: false,
  price: {
    minPrice: 500,
    maxPrice: 1200,
  },
};

const groupOneFilterSlice = createSlice({
  name: 'groupOneFilter',
  initialState: initialState,
  reducers: {
    toggleDevOne: (state) => {
      return {
        ...state,
        developers: {
          ...state.developers,
          devOne: !state.developers.devOne,
        },
      };
    },

    toggleDevTwo: (state) => {
      state.developers.devTwo = !state.developers.devTwo;
    },

    toggleDevThree: (state) => {
      return {
        ...state,
        developers: {
          ...state.developers,
          devThree: !state.developers.devThree,
        },
      };
    },

    toggleOnlyFav: (state) => {
      return { ...state, onlyFav: !state.onlyFav };
    },

    toggleIsInStock: (state) => {
      return { ...state, onlyInStock: !state.onlyInStock };
    },

    setPrice: (
      state,
      action: {
        payload: { priceType: 'minPrice' | 'maxPrice'; price: number };
        type: string;
      }
    ) => {
      const { priceType, price } = action.payload;
      state.price[priceType] = price;
    },
  },
});

// Действия:
export const {
  toggleDevOne,
  toggleDevTwo,
  toggleDevThree,
  toggleOnlyFav,
  toggleIsInStock,
  setPrice,
} = groupOneFilterSlice.actions;

// Состояние:
export const selectDevelopersFilter = (state: GroupOneFilterSlice) =>
  state.groupOneFilter.developers;
export const selectOnlyFavFilter = (state: GroupOneFilterSlice) =>
  state.groupOneFilter.onlyFav;
export const selectOnlyIsInStockFilter = (state: GroupOneFilterSlice) =>
  state.groupOneFilter.onlyInStock;
export const selectPriceFilter = (state: GroupOneFilterSlice) =>
  state.groupOneFilter.price;

export default groupOneFilterSlice.reducer;
