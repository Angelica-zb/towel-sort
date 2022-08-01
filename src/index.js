module.exports = function towelSort(matrix) {
    let str = []
    let st = []
    if (matrix == [] || (matrix == undefined)) { return []; } else {

        for (let k = 0; k < matrix.length; k++) {

            if (k == 0 || k % 2 == 0) {
                st = matrix[k].sort((a, b) => a - b)
                str = str.concat(st);
            } else {
                st = matrix[k].sort((a, b) => b - a)
                str = str.concat(st);
            }
        }
    }
    return str
}