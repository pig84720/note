/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    var count = 0,
        N = n;
    //n=0 or 1時直接return
    if(n == 1 || n == 0) {
        return n;
    }
    //從第1階開始走 每階花費i(階層數)的石頭數 每走一階記數一次
    //石頭量不足以放滿第i階時 return count
    for(i = 1; i < N + 1 ; i++) {
        n = n - i;
        if(n >= 0) {
            count++;
        } else {
            return count;
        }
    }
};