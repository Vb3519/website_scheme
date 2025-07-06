import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Api:
import { catalogProductsURL } from '../../../shared/api/catalogApi';
import serverResponseDelayImitation from '../../../shared/utils/serverResponseDelayImitation';

// Types:
// ------------------------

interface Product_Props {
  id: number;
  vendorTitle: string;
  vendorId: number;
  productTitle: string;
  price: number;
  isInStock: boolean;
}

interface CatalogProductsState {
  selectedProductsGroupId: null | number;
  products: Product_Props[];
  isLoading: boolean;
  errorMsg: string;
}

interface CatalogProductsSlice {
  catalogProducts: CatalogProductsState;
}

export const fetchProductsData = createAsyncThunk(
  'catalogProducts/fetchData',
  async (url: string, thunkApi) => {
    // Имитация задержки ответа от сервера:
    await serverResponseDelayImitation(2000);

    try {
      const productsDataResponse: Response = await fetch(url, {
        method: 'GET',
      });

      if (productsDataResponse.ok) {
        const productsData: Product_Props[] = await productsDataResponse.json();
        console.log('Загруженные данные по товарам:', productsData);

        return productsData;
      } else {
        const errorMsg: string = `HTTP Error: ${productsDataResponse.status} ${productsDataResponse.statusText}`;
        console.log(errorMsg);

        return thunkApi.rejectWithValue(errorMsg);
      }
    } catch (error: unknown) {
      const errorMsg: string = `Error: ${(error as Error).message}`;
      console.log(errorMsg);

      return thunkApi.rejectWithValue(errorMsg);
    }
  }
);

const initialState: CatalogProductsState = {
  selectedProductsGroupId: null,
  products: [],
  isLoading: false,
  errorMsg: '',
};

const catalogProductsSlice = createSlice({
  name: 'catalogProducts',
  initialState: initialState,
  reducers: {
    setSelectedProductsGroupId: (state, action) => {
      return { ...state, selectedProductsGroupId: action.payload };
    },

    setErrorMsg: (state, action) => {
      return { ...state, errorMsg: action.payload };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProductsData.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProductsData.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchProductsData.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload as string;
    });
  },
});

// Действия:
// ---------------
export const { setSelectedProductsGroupId, setErrorMsg } =
  catalogProductsSlice.actions;

console.log(
  'Доступные действия слайса каталога:',
  catalogProductsSlice.actions
);

// Слайсы состояния:
// ---------------
export const selectCatalogProductsSlice = (state: CatalogProductsSlice) =>
  state.catalogProducts;
export const selectCurrentProductsGroupId = (state: CatalogProductsSlice) =>
  state.catalogProducts.selectedProductsGroupId;
export const selectCurrentProductsList = (state: CatalogProductsSlice) =>
  state.catalogProducts.products;

export default catalogProductsSlice.reducer;
