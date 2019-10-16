/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var digits = digits.join("");
    var int = digits[digits.length - 1];
    var int = parseInt(int);
    //對最後一個數字+1
    int = int + 1;
    //若最後一個數字不是9的處理方式
    if(int != 10){
        var int = int.toString();
        var digits = digits.split("");
        digits[digits.length - 1] = int;
    } else {
        var digits = digits.split("");
        for(i = digits.length - 1 ; i >= 0 ; i--) {
            //i位置為9且前一個位置也為9的處理方式
            if(digits[i] == "9" && digits[i-1] == "9") {
                digits[i] = "0";
            //各個位數都是9的處理方式            
            } else if(digits[i] == "9" && i == 0) {
                digits[i] = "1";
                digits.push("0")
                break
            //i位置為9且前一個位置不為9的處理方式
            } else {
                var num = digits[i - 1];
                var num = parseInt(num);
                num = num + 1;
                var num = num.toString();
                digits[i - 1] = num;
                digits[i] = "0";
                return digits;
                break
            }
        }
    }  
    return digits
};