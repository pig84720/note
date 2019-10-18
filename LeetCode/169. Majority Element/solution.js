/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var ans;
    //數字少於等於兩個直接回傳第一個位置
    if(nums.length == 1 || nums.length == 2) {
        return nums[0];
    }
    //逐一比對 出現次數大於nums.length/2時回傳答案
    for(i = 0 ;i < nums.length ;i++) {
        ans = 0;
        for(j = 0 ;j < nums.length ;j++) {
            if(nums[i] == nums[j] ) {
                ans = ans + 1;
            }
            if(ans > nums.length/2) {
                return nums[i]
            }
        }
    }
};