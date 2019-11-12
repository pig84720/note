/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    //將陣列整形為由大到小排列
    A = A.sort(function(a,b) {
        return b - a;
    })
    //逐一檢查i項是否大於等於後兩項相加
    for(i = 0; i < A.length; i++) {
        //i項後方不足兩項時 跳出
        if(i > A.length - 3) {
            break;
        } else if(A[i] < A[i + 1] + A[i + 2]) {
            return A[i] + A[i + 1] + A[i + 2];
        } 
    }
    return 0;
};