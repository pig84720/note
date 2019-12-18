/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    nums = nums.sort(function(a,b) {
        return a - b;
    })
    for(i = 0; i < nums.length; i++) {
        if(i == nums.length - 1) {
            nums.splice(i,1);
        } else if(nums[i] !== nums[i + 1]) {
            nums.splice(i,1);
            i--
        } else {
            nums.splice(i,1);
        }
    }
    return nums
};