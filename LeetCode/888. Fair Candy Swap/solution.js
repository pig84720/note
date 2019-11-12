/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    var ans = [],
        A_sum = 0,
        B_sum = 0;
    for(i = 0; i < A.length; i++) {
        A_sum = A_sum + A[i];
    }
    for(j = 0; j < B.length; j++) {
        B_sum = B_sum + B[j];
    }
    if(A_sum > B_sum) {
        for(i = 0; i < A.length; i++) {
            for(j = 0; j < B.length; j++) {
                if((A[i] - B[j]) * 2 == A_sum - B_sum) {
                    ans.push(A[i]);
                    ans.push(B[j]);
                    return ans;
                } 
            }
        }
    } else {
        for(j = 0; j < B.length; j++) {
            for(i = 0; i < A.length; i++) {
                if((B[j] - A[i]) * 2 == B_sum - A_sum) {
                    ans.push(A[i]);
                    ans.push(B[j]);
                    return ans;
                } 
            }
        }
    }
};