import {httpClient} from '../utils/http';

export const authneticateUser = async data => {
  let response;
  try {
    response = await httpClient.post('/login', data);
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

export const updateEmpProfile = async data => {
  let response;
  console.log("employee controller" , data)
  try {
    response = await axios.put(
      'http://10.0.2.2:3001/api/v1/employee/profile',
      data,
    );
  } catch (error) {
    console.error('Error sending data:', JSON.stringify(error));
  }
  return response?.data?.data;
};
