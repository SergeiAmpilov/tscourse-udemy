interface User25 {
  login: string,
  password?: string,
}



type Hacker25 = {
  login: string,
  password: string | undefined
}

function multiply (a: number, b?: number ): number {

  if (typeof b === 'undefined') {
    return a * a;
  } else {
    return a * b;
  }
  
}

interface UserPro25 {
  login: string,
  password?: {
    type: 'primary' | 'secondary',
  }
}

function testPass25 (user: UserPro25): boolean {
  const t = user.password?.type;
  // const t = user.password ? user.password.type : undefined;
  const tt = user.password!.type;
  return true;
}

function test25(param?: string) {
  const t = param ?? 25;
}