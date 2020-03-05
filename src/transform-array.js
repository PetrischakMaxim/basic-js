module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next': ++i;
                break;
            case '--discard-prev':
                if (resultArr.length > 0) resultArr = resultArr.slice(0, resultArr.length - 1);
                break;
            case '--double-next':
                if (++i < arr.length) {
                    resultArr.push(arr[i]);
                    resultArr.push(arr[i]);
                }
                break;
            case '--double-prev':
                if (i > 0) resultArr.push(arr[i - 1]);
                break;
            default:
                resultArr.push(arr[i]);
        }
    }

    return resultArr;
};
