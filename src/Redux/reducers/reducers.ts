import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialState} from '../../Constants/types';

export const initialState: InitialState = {
  isWelcomeDone: false,
  premium_modal_visible: false,
};

export const reducer = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsWelcomeDone: (state, action: PayloadAction<boolean>) => {
      state.isWelcomeDone = action.payload;
    },
    setPremiumModal: state => {
      state.premium_modal_visible = !state.premium_modal_visible;
    },
  },
  extraReducers: builder => {
    builder;
  },
});

export const {setIsWelcomeDone, setPremiumModal} = reducer.actions;

export default reducer.reducer;
