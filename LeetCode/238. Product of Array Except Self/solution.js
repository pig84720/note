/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var ans = [],
        num = 1;
    //第i個位置的數字不放進去乘
    for(i = 0; i < nums.length; i++) {
        for(j = 0; j < nums.length; j++) {
            if(i !== j) {
                num = num * nums[j];
            }
        }
        ans.push(num);
        num = 1;
    }
    return ans;
};