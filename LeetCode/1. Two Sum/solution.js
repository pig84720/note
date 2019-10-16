/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (i = 0; i < nums.length;i++) {
        for(j = i + 1; j < nums.length;j++) {
            //依次比較相加是否等於target
            if(target === nums[j] + nums[i]) {
                    return [i,j];
            }
        }
    }
};
