/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    //各項以自身平方取代
    for(i = 0; i < A.length; i++) {
        A[i] = Math.pow(A[i],2);
    }
    //由小到大排序
    A.sort(function(a,b) {
        return a - b;
    });
    return A
};