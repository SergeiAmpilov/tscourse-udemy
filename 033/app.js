"use strict";
/* les 26 - result */
const f33 = {
    status: status26.Failed,
    data: {
        errorMessage: 'hello kitty',
        errorCode: 45,
        databaseId: 45,
    }
};
function isRespSuccessed33(res) {
    return res.status === status26.Success;
}
const getDbId33 = (res) => {
    if (isRespSuccessed33(res)) {
        return res.data.databaseId;
    }
    throw new Error('error in response, no id');
};
