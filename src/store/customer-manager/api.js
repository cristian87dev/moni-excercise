import axios from 'axios';

export const getCustomer = () => axios.get('https://wired-torus-98413.firebaseio.com/users.json');

export const createCustomer = (customerId, params) => axios.post(`https://wired-torus-98413.firebaseio.com/users/${customerId}.json`, {
  name: params.name,
  surname: params.surname,
  email: params.email,
  document_number: params.documentNumber,
  gender: params.gender,
});

export const updateCustomer = params => axios.patch('https://wired-torus-98413.firebaseio.com/users.json', {
  name: params.name,
  surname: params.surname,
  email: params.email,
  document_number: params.documentNumber,
  gender: params.gender,
});

export const deleteCustomer = customerId => axios.delete(`https://wired-torus-98413.firebaseio.com/users/${customerId}.json`);
