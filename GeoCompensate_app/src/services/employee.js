import {httpClient} from '../utils/http';

export const fetchEmployee = async searchQuery => {
  let response;
  try {
    response = await httpClient.get(`/employee/${searchQuery}`);
  } catch (error) {
    console.error('Error sending data:', JSON.stringify(error));
  }
  return response?.data?.data;
};
