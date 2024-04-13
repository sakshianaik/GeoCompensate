import {httpClient} from '../utils/http';

export const fetchCompany = async companyId => {
  let response;
  try {
    response = await httpClient.get(`/company/${companyId}`);
  } catch (error) {
    console.error('Error sending data:', JSON.stringify(error));
  }
  return response?.data?.data;
};
