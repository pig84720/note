/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var box = 0,
        ans = 0;
    //n等於2以下時返回0
    if(n == 2 || n == 1 || n == 0) {
        return 0;
    }
    //n逐一除以比自己小的數字並且n遞減
    for (i = n - 1 ; i >= 1 ; i--) {
        if(box == 1) {
            ans = ans + 1;
        };
        box = 0;
        //若因數只有1個(只有1)算為質數
        for(j = i - 1 ; j >= 1 ; j--) {
            if(i % j == 0) {
                box = box + 1;
            }
        }
    }
    return ans
};