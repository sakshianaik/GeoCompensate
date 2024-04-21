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

export const clockOut = async data => {
  let response;
  try {
    response = await httpClient.post('/timesheet/clockOut', data);
  } catch (error) {
    console.error('Error sending data:', JSON.stringify(error));
  }
  return response?.data?.data;
};

export const clockIn = async data => {
  let response;
  try {
    response = await httpClient.post('/timesheet/clockIn', data);
  } catch (error) {
    console.error('Error sending data:', JSON.stringify(error));
  }
  return response?.data?.data;
};

export const pingUserLocation = async data => {
  let response;
  try {
    response = await httpClient.post('/timesheet/pinglocation', data);
  } catch (error) {
    console.error('Error sending data:', JSON.stringify(error));
  }
  return response?.data?.data;
};

export const fetchHRViewTimesheet = async employeeId => {
  let response;
  try {
    response = await httpClient.get(`/timesheet/hr/${employeeId}`);
  } catch (error) {
    console.error('Error sending data:', JSON.stringify(error));
  }
  return response?.data?.data;
};
