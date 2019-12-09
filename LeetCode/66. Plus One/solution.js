/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var digits = digits.join("");
    var int = parseInt(digits[digits.length - 1]);
    int++;
    //對個位數+1
    int = int + 1;
    //個位數非9時
    if(int != 10){
        int = int.toString();
        digits = digits.split("");
        digits[digits.length - 1] = int;
    } else {
        digits = digits.split("");
        for(i = digits.length - 1 ; i >= 0 ; i--) {
            //i位置為9且前一個位置也為9的處理方式
            if(digits[i] == "9" && digits[i-1] == "9"){
                digits[i] = "0";
            //每位數皆為9的處理方式            
            } else if(digits[i] == "9" && i == 0) {
                digits[i] = "1";
                digits.push("0")
                break
            //i位置為9且前一個位置不為9的處理方式
            } else {
                var num = digits[i - 1];
                num = parseInt(num);
                num = num + 1;
                num = num.toString();
                digits[i - 1] = num;
                digits[i] = "0";
                return digits;
                break
            }
        }
    }  
    return digits
};