/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var num = 1,
        ans = 0,
        box = 1;
    //只對連續的1記數
    for(i = 0; i < nums.length; i++) {
        if(nums[i] == nums[num] && nums[i] != 0) {
            box = box + 1;
            num++;
        } else if(nums[i] != nums[num] && nums[i] != 0){
            if(box > ans) {
                ans = box;
            }
            box = 1;
            num++;
        } else {
            num++
        }
    }
    return ans;
};