import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import openstreetmapReducer from 'stores/openstreetmap-slice';
import userReducer from 'stores/user-slice';
import stockpileReducer from 'stores/stockpile-slice';
import opendataReducer from 'stores/opendata-slice';

export const store = configureStore({
  reducer: {
    openstreetmap: openstreetmapReducer,
    user: userReducer,
    stockpile: stockpileReducer,
    opendata: opendataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
