enum status26 {
  Success = 'success',
  Failed = 'failed',
}

interface Request26 {
  sum: number,
  from: number,
  to: string,
}

interface RequestData26 extends Request26 {
  databaseId: number,
}

interface ErrorData26 {
  errorMessage: string,
  errorCode: number
}


interface Response26 {
  status: status26,
  data: RequestData26 | ErrorData26
}


/*

| 
*/

const f26: Response26 = {
  status: status26.Failed,
  data: {
    errorMessage: 'hello kitty',
    errorCode: 45,
    databaseId: 45,
  }
};


interface RespSuccess26 {
  status: status26.Success,
  data: RequestData26,
}

interface RespFailed26 {
  status: status26.Failed,
  data: ErrorData26,
}

function test26(a: RespSuccess26 | RespFailed26) {

}