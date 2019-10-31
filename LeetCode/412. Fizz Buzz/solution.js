/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var ans = [];
    for(i = 1; i <= n; i++) {
        //3和5的公倍數時
        if(i % 3 == 0 && i % 5 == 0) {
            ans.push("FizzBuzz");
        //3的公倍數時
        } else if(i % 3 == 0) {
            ans.push("Fizz");
        //5的公倍數時
        } else if(i % 5 == 0) {
            ans.push("Buzz");
        //其餘的數字直接儲存
        } else {
            ans.push('' + i + '')
        }
    }
    return ans;
};