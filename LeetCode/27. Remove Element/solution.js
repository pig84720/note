/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //nums各元素逐一與val比對 相同者刪除
    for(i = 0 ;i < nums.length ;i++) {
        if(nums[i] == val) {
            nums.splice(i,1);
            i = i - 1;
        }
    }
    val = nums.length;
    return nums,val
};