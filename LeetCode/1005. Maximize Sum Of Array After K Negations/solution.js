/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    var ans = 0;
    //將A陣列整形為由大到小排列
    A = A.sort(function(a,b) {
        return a - b;
    });
    //變號執行K次
    for(i = 0; i < K; i++) {
        //若最小項小於0 變號後再重整一次A陣列
        if(A[0] < 0) {
            A[0] = A[0] * -1;
            A = A.sort(function(a,b) {
                return a - b; 
            });
        //若最小項大於等於0 變號
        } else {
            A[0] = A[0] * -1;
        }
    }
    for(j = 0; j < A.length; j++) {
        ans = ans + A[j];
    }
    return ans;
};