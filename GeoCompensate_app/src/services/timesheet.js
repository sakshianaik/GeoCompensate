import {httpClient} from '../utils/http';

export const checkClockedIn = async data => {
  let response;
  try {
    response = await httpClient.post('/timesheet/check', data);
  } catch (error) {
    console.error('Error sending data:', JSON.stringify(error));
  }
  return response?.data?.data;
};
