/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    //假設給定數字不會超過3的100次方
    for(i = 100 ; i > 0 ; i--) {
        //考慮n等於1時的情況(3的0次方)
        if(n == 1){
         return true;
         //除3有餘數或者n為0時回傳錯誤   
        } else if(n % 3 != 0 || n == 0) {
            return false;
            //通過後除以3再繼續驗直到n=3
        } else {
            n= n / 3;
            if(n == 3){
                return true;
                break
            }
        }
    }
};