import axios from 'axios';

const BASE_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app';

export async function GetCategoriesAsync() {
  try {
    const response = await axios.get(`${BASE_URL}/getCategories`);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    return {
      status: error.response.statusCode,
      data: null,
    };
  }
}

export async function GetQuestionsAsync() {
  try {
    const response = await axios.get(`${BASE_URL}/getQuestions`);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    return {
      status: error.response.statusCode,
      data: null,
    };
  }
}
