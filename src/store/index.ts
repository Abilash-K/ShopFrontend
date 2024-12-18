import { configureStore } from '@reduxjs/toolkit';
import adminReducer from '../features/admin/adminSlice';

export const store = configureStore({
  reducer: {
    admin: adminReducer, // Add reducers as needed
  },
});

// TypeScript types for store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
