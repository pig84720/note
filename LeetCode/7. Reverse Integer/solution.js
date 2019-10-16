/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //x=0時直接回傳答案
    if (x == 0) {
        return 0;
    }
    var x = x.toString(),
        ans = [];
    //把尾端的0都砍掉直到遇到非0的數字
    for(i = x.length - 1 ; i >= 0 ; i--) {
        if(x[i] == 0 && x.length != 1) {
           x = x.substring(0, i) + x.substring(i+1);
           } else {
               break
           }
    }
    //若為負數先儲存負號並刪除它避免重複儲存
    if(x[0] == "-") {
        ans.push(x[0]);
        x = x.substring(0, 0) + x.substring(0+1);
    }
    //將x內的數字反轉儲存
    for(j = x.length -1 ; j >= 0 ; j--) {
        ans.push(x[j]);
    }
    //ans轉為數字
    var ans = ans.join("");
    var ans = parseInt(ans);
    if(ans > 2147483647) {
        return 0;
    } else if (ans < -2147483648) {
        return 0;
    } else {
        return ans
    }
};