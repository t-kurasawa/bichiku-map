import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import openstreetmapReducer from 'stores/openstreetmap-slice';
import stockpileReducer from 'stores/stockpile-slice';
import evacuationReducer from 'stores/evacuation-slice';

export const store = configureStore({
  reducer: {
    openstreetmap: openstreetmapReducer,
    stockpile: stockpileReducer,
    evacuation: evacuationReducer,
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
