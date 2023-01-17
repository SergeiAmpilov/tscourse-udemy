

/* les 26 - result */

/*
enum status26 {
  Success = 'success',
  Failed = 'failed',
}
*/

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

const f33: Response26 = {
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


type Res33 = RespSuccess26 | RespFailed26;
type f33 = (res: Res33) => number;

function isRespSuccessed33(res: Res33): res is RespSuccess26 {
  return res.status ===  status26.Success;
}

const getDbId33: f33 = (res) => {
  if (isRespSuccessed33(res)) {
    return res.data.databaseId
  }

  throw new Error('error in response, no id');
}
