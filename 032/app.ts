/* type guard */


interface User32 {
  name: string;
  email: string;
  login: string;
}

interface Admin32 {
  name: string;
  roleId: number;
}


const uSerg32 = {
  name: 'Sergei',
  email: 's@s.ru',
  login: 'sa'
};



function isString32(x: string | number): x is string {
  return typeof x === 'string';
}


function logId(id: string | number): void {
  if (isString32(id)) {
    
  }
}

function isAdmin32(user: User32 | Admin32): user is Admin32 {
  return 'roleId' in user;
}

function isAdminAlter32(user: User32 | Admin32): user is Admin32 {
  return (user as Admin32).roleId !== undefined;
}

function setRole32(user: User32 | Admin32): void {
  if (isAdmin32(user)) {
    user.roleId = 0;
  } else {
    // user.
    throw new Error('user is not admin');
  }
}