/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var num = 1,
        ans = 0;
    //第i+1項大於第i項時買進
    //記錄價差
    for(i = 0; i < prices.length; i++) {
        if(prices[i] < prices[num]) {
            ans = ans + (prices[num] - prices[i])
        }
        num++
    }
    return ans
};