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

export const relieveEmployee = async employeeId => {
  let response;
  try {
    response = await httpClient.delete(`employee/profile/${employeeId}`);
  } catch (error) {
    console.error('Error sending data:', JSON.stringify(error));
  }
  return response;
};
