"use strict";
class Resp65 {
    constructor(data, error) {
        this.data = data;
        this.error = error;
    }
}
new Resp65('data not found', 404);
class HttpResp65 extends Resp65 {
    setCode(code) {
        this.code = code;
    }
}
