/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    var num = 1,
        peak = 0;
    for(i = 0; i < A.length; i++) {
        //第一項就比後一項大時
        if(i == 0 && A[i] >= A[num]) {
            return false;
        //最高點出現時 紀錄峰值
        } else if(A[i] >= A[num]) {
            peak = i;
            break;
        }
        num++
    }
    //峰值在最後一項時
    if(num == A.length + 1) {
        return false;
    }
    //檢查峰值後是否皆為遞減
    for(i = peak; i < A.length; i++) {
        if(A[i] <= A[num]) {
            return false;
        }
        num++
    }
    return A.length > 1;
};