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

export const updateEmpProfile = async data => {
  let response;
  try {
    response = await httpClient.put('/employee/profile', data);
  } catch (error) {
    console.error('Error sending data:', JSON.stringify(error));
  }
  return response?.data?.data;
};

export const fetchEmployeeWithID = async employeeId => {
  let response;
  try {
    console.log('employee id in employeejs', employeeId);
    response = await httpClient.get(`/employee/profile/${employeeId}`);
  } catch (error) {
    console.error('Error sending data:', JSON.stringify(error));
  }
  return response?.data?.data;
};

export const changePassword = async data => {
  let response;
  try {
    response = await httpClient.post('/employee/changepassword', data);
  } catch (error) {
    console.error('Error sending data:', JSON.stringify(error));
  }
  return response?.data?.data;
};
