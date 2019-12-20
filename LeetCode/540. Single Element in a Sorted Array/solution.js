/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    nums = nums.sort(function(a,b) {
        return a- b;
    });
    //找到單一存在的數字並回傳
    for(i = 0; i < nums.length; i++) {
        if(i == 0 && nums[i] !== nums[i + 1]) {
            return nums[i];
        } else if(i == nums.length - 1 && nums[i] !== nums[i - 1]) {
            return nums[i];
        } else if(nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
            return nums[i];
        }
    }
};