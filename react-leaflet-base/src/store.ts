import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import openstreetmapReducer from './stores/openstreetmap-slice'
import randomuserReducer from './stores/randomuser-slice'
import stockpileReducer from './stores/stockpile-slice'

export const store = configureStore({
  reducer: {
    openstreetmap: openstreetmapReducer,
    randomuser: randomuserReducer,
    stockpile: stockpileReducer
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
