import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { LatLngLiteral } from 'leaflet';

const STORE_NAME = 'openstreetmap';

export interface OpenStreetMapState {
  status: 'idle' | 'loading' | 'failed';
  currentLocation: LatLngLiteral;
  mapCenterPosition: LatLngLiteral;
}

const initialPosition: LatLngLiteral = {
  lat: 35.666452,
  lng: 139.31582,
};

const initialState: OpenStreetMapState = {
  status: 'idle',
  currentLocation: initialPosition,
  mapCenterPosition: initialPosition,
};

export const openstreetmapSlice = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setCurrentLocation: (state, action: PayloadAction<LatLngLiteral>) => {
      state.currentLocation = action.payload;
    },
    setMapCenterPosition: (state, action: PayloadAction<LatLngLiteral>) => {
      state.mapCenterPosition = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const selectCurrentLocation = (state: RootState) =>
  state.openstreetmap.currentLocation;
export const selectMapCenterPosition = (state: RootState) =>
  state.openstreetmap.mapCenterPosition;

export const { setCurrentLocation, setMapCenterPosition } =
  openstreetmapSlice.actions;

export default openstreetmapSlice.reducer;
