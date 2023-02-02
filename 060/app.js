"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
const res60 = logMiddleware(10);
