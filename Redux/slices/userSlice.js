import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const initialState = {
  userInfo: null,
  fetchStatus: '',
};

export const fetchUserInfo = createAsyncThunk('fetch-userInfo', async () => {
  const db = getFirestore();
  const auth = getAuth();
  const snap = await getDoc(doc(db, 'users', auth.currentUser.uid));
  if (snap.exists()) {
    return snap.data();
  } else {
    return { name: 'error', email: 'error' };
  }
});

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        console.log(action.payload);
        state.userInfo = action.payload;
        state.fetchStatus = 'success';
      })
      .addCase(fetchUserInfo.pending, (state) => {
        state.fetchStatus = 'loading';
      });
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state) => state.user.userInfo;

export default userSlice.reducer;
