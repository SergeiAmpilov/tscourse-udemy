"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 5] = "SUCCESS";
    StatusCode[StatusCode["PENDING"] = -2] = "PENDING";
    StatusCode["REJECTED"] = "asd";
})(StatusCode || (StatusCode = {}));
;
const res17 = {
    msg: 'Success',
    statusCode: StatusCode.PENDING,
};
console.log(res17);
function action(status) {
    console.log(status);
}
action(StatusCode.REJECTED);
action(-2);
action(3);
action(4);
