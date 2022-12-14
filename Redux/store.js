import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});
