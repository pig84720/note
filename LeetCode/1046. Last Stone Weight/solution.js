/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    //重新排列陣列 由小到大
    stones = stones.sort(function (a,b) {
        return a - b;
    });
    var num = 0;
    for(i = stones.length - 1; i >= 0; i--) {
        //刪光時回傳0
        if(i == 0) {
            return stones[0];
            break;
        //最後一項大於前一項時處理方式
        } else if(stones[i] > stones[i-1]) {
            num = stones[i] - stones[i-1];
            stones.splice(i,1);
            stones.splice((i - 1),1);
            stones.push(num);
            stones = stones.sort(function (a,b) {
                return a - b;
            });
        //最後兩項相等時處理方式
        } else {
            stones.splice(i,1);
            stones.splice((i - 1),1);
            i = i - 1;
            if(stones.length == 0) {
                return 0;
             }
        }
    }
};