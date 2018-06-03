export const BASE_URL = 'https://shopper-api.herokuapp.com/api/v1';
export const getHeaders = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
};
