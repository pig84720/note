/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    //石頭4顆以下直接勝利
    if(n >= 1 && n <= 3) {
      return true  
    //石頭數目為4的倍數會輸
    } else if(n % 4 == 0) {
        return false
    } else {
        return true
    }
};