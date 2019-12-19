/**
 * @param {number[]} nums
 * @return {number[]}
 */
//解題思路:
//檢查前後是否相同 紀錄僅出現一次的數字
var singleNumber = function(nums) {
    var ans = [];
    nums = nums.sort(function(a,b) {
        return a - b
    })
    for(i = 0; i < nums.length; i++) {
        if(i == 0 && nums[i] != nums[i + 1]) {
            ans.push(nums[i]);
        } else if(i == nums.length - 1 && nums[i] != nums[i - 1]) {
            ans.push(nums[i]);
        } else if(nums[i] != nums[i + 1] && nums[i] != nums[i - 1]) {
            ans.push(nums[i]);
        }
    }
    return ans;
};