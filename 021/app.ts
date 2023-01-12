function fetchWithAuth21 (
  url: string,  method: 'get' | 'post' | 'put'): (1 | 0 | -1)
{

  console.log(method, typeof method);


  return -1;
}

fetchWithAuth21('/home', 'put');
// fetchWithAuth21('/home', 1);

const g21 = 'get';
fetchWithAuth21('/hh', g21);

let method21 = 'post';
method21 = 'ff';

fetchWithAuth21('/hh', method21 as 'post');

