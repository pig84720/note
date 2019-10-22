/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var ans = 0;
    //第i項後所有項依序減第i項
    for(i = 0 ;i < prices.length ;i++) {
        for(j = i + 1 ;j <prices.length ;j++) {
            //紀錄第一組數字
            if(ans.length == 0) {
                ans = prices[j] - prices[i];
            //若prices[j] - prices[i]大於紀錄的數字 紀錄之
            } else if(prices[j] - prices[i] > ans) {
                ans = prices[j] - prices[i];
            }
        }
    }
    if(ans <= 0) {
        return 0;
    } else {
        return ans;
    }
};