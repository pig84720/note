/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    //r:陣列維度 c:單一陣列內元素數目
    var ans = [],
        box = [],
        num = [],
        x = 0;
    //將nums內數字全部取出
    for(i = 0; i < nums.length; i++) {
        for(j = 0; j < nums[i].length; j++) {
            box.push(nums[i][j])
        }
    }
    //若無法重塑為r*c矩陣(數量不足)則輸出原矩陣
    if(r * c > box.length) {
        return nums;
    //重塑為r*c矩陣
    } else {
        for(j = 0; j < r; j++) {
            for(k = 0; k < c; k++) {
                num.push(box[x]);
                x++;
            }
            ans.push(num);
            num = [];
        }
    }
    return ans;
};