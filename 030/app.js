"use strict";
/* null */
;
function findUser() {
    if (Math.random() > .5) {
        return;
    }
    else {
        return {
            name: 'V4stats',
        };
    }
}
const u30 = findUser();
const name30 = u30 === null || u30 === void 0 ? void 0 : u30.name;
