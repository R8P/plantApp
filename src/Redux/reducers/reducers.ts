import {getCategories, getQuestions} from './../actions/actions';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialState} from '../../Constants/types';

export const initialState: InitialState = {
  isOnBoardingDone: false,
  premium_modal_visible: false,
  categories: [],
  questions: [],
  loading: false,
};

export const reducer = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsOnBoardingDone: (state, action: PayloadAction<boolean>) => {
      state.isOnBoardingDone = action.payload;
    },
    setPremiumModal: state => {
      state.premium_modal_visible = !state.premium_modal_visible;
    },
  },
  extraReducers: builder => {
    builder
      // Get Categories
      .addCase(getCategories.pending, state => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.categories = action.payload.data.data;
        }
        state.loading = false;
      })
      .addCase(getCategories.rejected, (state, action) => {})
      //Get Questions
      .addCase(getQuestions.pending, state => {
        state.loading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.questions = action.payload.data;
        }
        state.loading = false;
      })
      .addCase(getQuestions.rejected, (state, action) => {});
  },
});

export const {setIsOnBoardingDone, setPremiumModal} = reducer.actions;

export default reducer.reducer;
