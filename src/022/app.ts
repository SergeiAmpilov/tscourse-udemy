type httpMethod = 'get' | 'post' | 'put';

type User = {
  name: string,
  age: number,
  skills: string[],
};

type Role = {
  id: number,
};

type UserWithRole = User & Role;

function fetchWithAuth22 (url: string,  method: httpMethod): (1 | 0 | -1)
{
  console.log(method, typeof method);
  return -1;
}


function checkUser(user: User): boolean {

  user.name.toUpperCase();
  return true;
}

function magic22(superUser: UserWithRole) {
  superUser;
}