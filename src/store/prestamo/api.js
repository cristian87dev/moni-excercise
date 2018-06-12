import jsonp from 'jsonp';

export const obtenerPrestamo = (params) => jsonp('http://scoringservice.moni.com.ar:7001/api/v1/scoring/', {
  name: params.name,
  surname: params.surname,
  email: params.email,
  document_number: params.documentNumber,
  gender: params.gender,
  score: params.loanMount
});
