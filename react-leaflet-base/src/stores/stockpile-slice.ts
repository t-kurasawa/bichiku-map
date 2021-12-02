import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { search, SearchCondition } from '../apis/stockpile-api';

import { RandomUser } from '../stores/randomuser-slice'

import moment from 'moment'

const STORE_NAME = 'stockpile';

export interface StockpilesState {
  status: 'idle' | 'loading' | 'failed';
  stockpiles: Array<Stockpile>
}

export interface Stockpile{
  id: number,
  name: string,
  user: RandomUser,
  stockQuantity: number,
  lat: number,
  lng: number,
  address: string,
  registrationDate: string,
  expiryDate: string,
}

const registrationDate = moment().format('YYYY-MM-DD')

const initialState: StockpilesState = {
  status: 'idle',
  stockpiles: [
    {
      id: 1,
      name: '尾西の五目ごはん',
      user: {
        id: {
          name: 'PPS',
          value: '0390511T'
        },
        name: {
          title: 'mr',
          first: '太郎',
          last: '田中',
        },
        gender: 'male',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/75.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
        },
        email: 'brad.gibson@example.com'
      },
      stockQuantity: 100,
      lat: 35.63504117308411,
      lng: 139.32518005371097,
      address: '東京都八王子市',
      registrationDate: registrationDate,
      expiryDate: registrationDate,
    },
    {
      id: 1,
      name: '尾西の五目ごはん',
      user: {
        id: {
          name: 'PPS',
          value: '0390511T'
        },
        name: {
          title: 'mr',
          first: '太郎',
          last: '田中',
        },
        gender: 'male',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/75.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
        },
        email: 'brad.gibson@example.com'
      },
      stockQuantity: 100,
      lat: 35.63504117308411,
      lng: 139.32518005371097,
      address: '東京都八王子市',
      registrationDate: registrationDate,
      expiryDate: registrationDate,
    },
    {
      id: 2,
      name: '尾西の五目ごはん',
      user: {
        id: {
          name: 'PPS',
          value: '0390511T'
        },
        name: {
          title: 'mr',
          first: '太郎',
          last: '田中',
        },
        gender: 'male',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/75.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/2.jpg'
        },
        email: 'brad.gibson@example.com'
      },
      stockQuantity: 100,
      lat: 35.63504117308411,
      lng: 139.32518005371097,
      address: '東京都八王子市',
      registrationDate: registrationDate,
      expiryDate: registrationDate,
    },
    {
      id: 3,
      name: '尾西の五目ごはん',
      user: {
        id: {
          name: 'PPS',
          value: '0390511T'
        },
        name: {
          title: 'mr',
          first: '太郎',
          last: '田中',
        },
        gender: 'male',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/75.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/3.jpg'
        },
        email: 'brad.gibson@example.com'
      },
      stockQuantity: 100,
      lat: 35.63504117308411,
      lng: 139.32518005371097,
      address: '東京都八王子市',
      registrationDate: registrationDate,
      expiryDate: registrationDate,
    },
    {
      id: 4,
      name: '尾西の五目ごはん',
      user: {
        id: {
          name: 'PPS',
          value: '0390511T'
        },
        name: {
          title: 'mr',
          first: '太郎',
          last: '田中',
        },
        gender: 'male',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/75.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/4.jpg'
        },
        email: 'brad.gibson@example.com'
      },
      stockQuantity: 100,
      lat: 35.666257135256046,
      lng: 139.32200431823733,
      address: '東京都八王子市',
      registrationDate: registrationDate,
      expiryDate: registrationDate,
    },
    {
      id: 5,
      name: '水５２リットル',
      user: {
        id: {
          name: 'PPS',
          value: '0390511T'
        },
        name: {
          title: 'mr',
          first: '太郎',
          last: '田中',
        },
        gender: 'male',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/75.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/5.jpg'
        },
        email: 'brad.gibson@example.com'
      },
      stockQuantity: 1,
      lat: 35.666830131447675,
      lng: 139.3111896514893,
      address: '東京都八王子市',
      registrationDate: registrationDate,
      expiryDate: registrationDate,
    },
    {
      id: 6,
      name: 'カップラーメン',
      user: {
        id: {
          name: 'PPS',
          value: '0390511T'
        },
        name: {
          title: 'mr',
          first: '太郎',
          last: '田中',
        },
        gender: 'male',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/75.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/6.jpg'
        },
        email: 'brad.gibson@example.com'
      },
      stockQuantity: 50,
      lat: 35.65874069006734,
      lng: 139.31839942932132,
      address: '東京都八王子市',
      registrationDate: registrationDate,
      expiryDate: registrationDate,
    },
    {
      id: 7,
      name: '尾西の炊き込みごはん',
      user: {
        id: {
          name: 'PPS',
          value: '0390511T'
        },
        name: {
          title: 'mr',
          first: '太郎',
          last: '田中',
        },
        gender: 'male',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/75.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/7.jpg'
        },
        email: 'brad.gibson@example.com'
      },
      stockQuantity: 100,
      lat: 35.67223840526204,
      lng: 139.31887149810794,
      address: '東京都八王子市',
      registrationDate: registrationDate,
      expiryDate: registrationDate,
    },
  ],
};


// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const stockpileSearchAsync = createAsyncThunk(
  STORE_NAME + '/search',
  async (condition:SearchCondition) => {
    const response = await search(condition);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const StockPileSlice = createSlice({
  name: STORE_NAME,
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  } ,
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(stockpileSearchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(stockpileSearchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.stockpiles = action.payload.stockpiles;
      })
      .addCase(stockpileSearchAsync.rejected, (state) => {
        state.status = 'failed';
      })
  },
});


export const selectStockPiles = (state: RootState) => state.stockpile.stockpiles;

export default StockPileSlice.reducer;

