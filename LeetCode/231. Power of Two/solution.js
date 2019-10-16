/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    //假設給定數字不會超過2的100次方
    for(i = 100 ; i > 0 ; i--) {
        //考慮n等於1時的情況(3的0次方)
        if(n == 1){
         return true;
         //除2有餘數或者n為0時回傳錯誤   
        } else if(n % 2 != 0 || n == 0) {
            return false;
            //通過後除以2再繼續驗直到n=2
        } else {
            n= n / 2;
            if(n == 2){
                return true;
                break
            }
        }
    }
};