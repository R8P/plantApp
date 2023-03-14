import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialState} from '../../Constants/types';

export const initialState: InitialState = {
  isWelcomeDone: false,
};

export const reducer = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsWelcomeDone: (state, action: PayloadAction<boolean>) => {
      state.isWelcomeDone = action.payload;
    },
   
  },
  extraReducers: builder => {
    builder;
  },
});

export const {setIsWelcomeDone} = reducer.actions;

export default reducer.reducer;
