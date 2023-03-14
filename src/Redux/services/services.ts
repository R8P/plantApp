import axios from 'axios';

const BASE_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app';

export async function getCategories() {
  return new Promise((resolve, reject) => {
    const config: any = {
      header: 'Content-Type: application/json',
    };
    axios
      .get(`${BASE_URL}/getCategories`, config)
      .then(val => {
        resolve(val);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
}

export async function getQuestions() {
  return new Promise((resolve, reject) => {
    const config: any = {
      header: 'Content-Type: application/json',
    };
    axios
      .get(`${BASE_URL}/getQuestions`, config)
      .then(val => {
        resolve(val);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
}
