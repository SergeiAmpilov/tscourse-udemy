class Resp65<D, E> {
  data?: D;
  error?: E;

  constructor(data?: D, error?: E) {
    this.data = data;
    this.error = error;
  }
}


new Resp65<string, number>('data not found', 404);


class HttpResp65 extends Resp65<string, number> {
  code: number;

  setCode(code: number) {
    this.code = code;
  }
}
