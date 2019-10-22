/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false
    }
    //先將x轉陣列    
    x = x.toString();
    x = x.split("");
    //深層複製x
    var X = JSON.parse(JSON.stringify(x));
    x = x.reverse();
    x = x.join();
    X = X.join();
    //反轉後比較是否相同
    return x == X;
};