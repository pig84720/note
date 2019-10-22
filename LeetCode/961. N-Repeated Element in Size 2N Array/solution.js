/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    //逐一比對 重複出現直接回傳
    for(i = 0 ;i < A.length ;i++) {
        for(j = i + 1 ;j < A.length ;j++) {
            if(A[i] == A[j]) {
                return A[i]
            }
        }
    }
};