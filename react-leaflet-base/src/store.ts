import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import openstreetmapReducer from './stores/openstreetmap-slice'
import randomuserReducer from './stores/randomuser-slice'
import stockpileReducer from './stores/stockpile-slice'
import opendataReducer from './stores/opendata-slice'

export const store = configureStore({
  reducer: {
    openstreetmap: openstreetmapReducer,
    randomuser: randomuserReducer,
    stockpile: stockpileReducer,
    opendata: opendataReducer
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
