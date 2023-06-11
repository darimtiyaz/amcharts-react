import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import dataGridData from "./dataGrid/index"

export const store = configureStore({
  reducer: {
    dataGridData
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch 