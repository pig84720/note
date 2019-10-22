/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var ans = 0;
    //從2的32次方開始依序檢查
    for(i = 32 ;i >= 0 ;i--) {
        if(n >= Math.pow(2,i)) {
            ans = ans + 1;
            n = n - Math.pow(2,i);
        }
    }
    return ans;
};