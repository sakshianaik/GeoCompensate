import axios from 'axios';

export const authneticateUser = async data => {
  let response;
  try {
    response = await axios.post('http://10.0.2.2:3001/api/v1/login', data);
  } catch (error) {
    console.error('Error sending data:', JSON.stringify(error));
  }
  return response?.data?.data;
};

export const registerEmployee = async data => {
  let response;
  try {
    response = await axios.post(
      'http://10.0.2.2:3001/api/v1/employee/register',
      data,
    );
  } catch (error) {
    console.error('Error sending data:', JSON.stringify(error));
  }
  return response?.data?.data;
};
