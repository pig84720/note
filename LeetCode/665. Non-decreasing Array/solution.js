/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var num = 0;
    for(i = 0; i < nums.length; i++) {
        if(nums[i] > nums[i + 1]) {
            if(i == 0){
                nums[i] = nums[i + 1];
            } else if(nums[i] > nums[i + 2] && nums[i + 1] > nums[i - 1]) {
                nums[i] =  nums[i + 1];
            } else if(nums[i] < nums[i - 1] && nums[i + 1] > nums[i - 1]) {
                nums[i] = nums[i + 1] - 1;
            } else if(i == nums.length - 2) {
                nums[i + 1] = nums[i];
            } else if(nums[i + 1] < nums[i] && nums[i + 1] <　nums[i + 2]) {
                nums[i + 1] = nums[i];
            } else if(nums[i + 1] < nums[i] && nums[i + 2] > nums[i]) {
                nums[i + 1] = nums[i];
            }
            num = num + 1;
            i = -1;
        }
        if(num == 2) {
            return false;
        }
    }
    return true;
};