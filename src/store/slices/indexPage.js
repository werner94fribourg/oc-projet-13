import { createSlice } from '@reduxjs/toolkit';

const initialState = { indexPage: false };

const indexSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    setIndex(state, action) {
      const isIndex = action.payload;
      state.indexPage = isIndex;
    },
  },
});

const indexActions = indexSlice.actions;

export const setIndex = (isIndex, dispatch) => {
  dispatch(indexActions.setIndex(isIndex));
};

const indexReducer = indexSlice.reducer;

export default indexReducer;
