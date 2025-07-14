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
    minPrice: 0,
    maxPrice: 0,
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
  },
});

// Действия:
export const { toggleDevOne, toggleDevTwo, toggleDevThree } =
  groupOneFilterSlice.actions;

// Состояние:
export const selectDevelopersFilter = (state: GroupOneFilterSlice) =>
  state.groupOneFilter.developers;

export default groupOneFilterSlice.reducer;
