import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { stockpileApi } from 'apis';
import { Stockpile } from 'schema';

const STORE_NAME = 'stockpile';

export interface StockpilesState {
  status: 'idle' | 'loading' | 'failed';
  stockpiles: Array<Stockpile>;
}

const initialState: StockpilesState = {
  status: 'idle',
  stockpiles: [
    {
      id: 1,
      item_ja: '水',
      unit_ja: 'L',
      category_ja: '食品',
      image:
        'https://code4fukui.github.io/tokyobichikunavi/src/assets/images/tool/result/stockpile/img-01.png',
      description_ja:
        '人が生命を維持するのに必要な水分量は、年齢や体重によって変わってきますが1日1人3リットルが目安量です。',
      item_en: 'Water (for drinking, cooking, etc.)',
      unit_en: 'liters',
      category_en: 'Food',
      description_en:
        'The human body needs approximately 3 liters per day to maintain life. Also, the amount differs depending on the age and weight.',
      infantsMale: 2.4,
      infantsFemale: 2.4,
      child1Male: 2.4,
      child1Female: 2.4,
      child2Male: 3,
      child2Female: 3,
      adultMale: 3,
      adultFemale: 3,
      agedMale: 3,
      agedFemale: 3,
      pet: '',
      url_yahoo: 'https://bit.ly/2Nt1CVQ',
      url_rakuten: 'https://bit.ly/37DfsM3',
      url_amazon: 'https://amzn.to/37CbHGI',
    },
  ],
};

export const fetchStockpile = createAsyncThunk(
  STORE_NAME + '/stockpiles',
  async () => {
    const response = await stockpileApi.fetchStockpile();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const StockPileSlice = createSlice({
  name: STORE_NAME,
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockpile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStockpile.fulfilled, (state, action) => {
        state.status = 'idle';
        state.stockpiles = action.payload;
      })
      .addCase(fetchStockpile.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectStockpiles = (state: RootState) =>
  state.stockpile.stockpiles;

export default StockPileSlice.reducer;
