import {createAsyncThunk} from '@reduxjs/toolkit';
import {GetCategoriesAsync, GetQuestionsAsync} from '../services/services';

export const getCategories = createAsyncThunk(
  'app/getCategories',
  async (_, thunkAPI) => {
    try {
      return await GetCategoriesAsync();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const getQuestions = createAsyncThunk(
  'app/getQuestions',
  async (_, thunkAPI) => {
    try {
      return await GetQuestionsAsync();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);
