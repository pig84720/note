/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    //假設給定數字不會超過4的100次方
    for(i = 100 ; i > 0 ; i--) {
        //考慮n等於1時的情況(4的0次方)
        if(n == 1){
         return true;
         //除4有餘數或者n為0時回傳錯誤   
        } else if(n % 4 != 0 || n == 0) {
            return false;
            //通過後除以4再繼續驗直到n=4
        } else {
            n= n / 4;
            if(n == 4){
                return true;
                break
            }
        }
    }
};