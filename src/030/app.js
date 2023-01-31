"use strict";
/* null */
;
function findUser() {
    if (Math.random() > .5) {
        return null;
    }
    else {
        return {
            name: 'V4stats',
        };
    }
}
const u30 = findUser();
// const name30 = u30?.name;
// const name30 = u30?.name;
if (u30) {
    const name30 = u30.name;
}
