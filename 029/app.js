"use strict";
/* never type */
function generateError(message) {
    throw new Error(message);
}
// const a29: never = 1;
const b29 = generateError('try');
function processPayment(action) {
    switch (action) {
        case 'refund':
            /** */
            break;
        case 'checkout':
            /** */
            break;
        default:
            const _ = action; /* never as checking method*/
            throw new Error('no such action available');
            break;
    }
}
function isString(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    generateError('no such type');
}
