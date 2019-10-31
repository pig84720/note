/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //將陣列重新排列 由小到大
    nums = nums.sort(function(a,b) {
        return a - b;
    });
    for(i = 0; i < nums.length; i++) {
        //檢查第一項時檢核條件
        if(i == 0) {
            if(nums[i] != nums[i + 1]) {
                return nums[i];
            } 
        //檢查最後一項時檢核條件
        } else if(i == nums.length - 1) {
                if(nums[i] != nums[i - 1]) {
                    return nums[i];
                }
        //檢查其餘項時檢核條件
        } else {
            if(nums[i] != nums[i + 1] && nums[i] != nums[i - 1]) {
                return nums[i];
            }
        }
    }
};