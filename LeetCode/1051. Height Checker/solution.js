/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    var ans = 0,
    //深層複製heights
        hei = JSON.parse(JSON.stringify(heights));
    //將hei整形為正確隊形(由小到大排列)
    hei = hei.sort(function (a,b) {
        return a - b;
    });
    //與正確隊形比對 數字不同時紀錄
    for(i = 0; i < heights.length; i++) {
        if(heights[i] != hei[i]) {
            ans = ans + 1;
        }
    }
    return ans
};