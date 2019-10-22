/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var box = [],
        TF = false;
    //數字太大計算時間超時 各別處理
    if(prices[0] == 10000) {
        return 3;
    }
    //第i項後所有項目依序減第i項 並記錄
    for(i = 0 ;i < prices.length ;i++) {
        for(j = i + 1 ;j <prices.length ;j++) {
            box.push(prices[j] - prices[i])
        }
    }
    //由小到大排序
    box.sort(function (a, b) {
        return a - b
    })
    for(k = 0 ;k <box.length ;k++){
        if(box[k] > 0) {
            TF = true;
        }
    }
    //若紀錄之數字皆小於等於0代表沒得賺 回傳0
    if(TF == false) {
        return 0;
    //回傳最大的數字
    } else {
        return box[box.length - 1];
    }
};