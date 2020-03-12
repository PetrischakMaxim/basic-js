module.exports = class DepthCalculator {
    calculateDepth(array) {
        let result = 0;
        if (Array.isArray(array)) {
            array
                .filter(el => Array.isArray(el))
                .map(el => result = Math.max(this.calculateDepth(el), result));
            result++;
        };
        return result;
    };
};
