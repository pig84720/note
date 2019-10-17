/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //紀錄0出現次數用
    var zeroes = 0;
    for(i = 0 ; i < nums.length ; i++) {
        //找到0時紀錄並刪除
        if(nums[i] == 0) {
            nums.splice(i,1);
            i = i - 1;
            zeroes = zeroes + 1;
        }
    }
    //預防完全沒0在裡面的情況
    if(zeroes != 0) {
        for(j = 1 ; j <= zeroes ; j++) {
            nums.push(0)
        }
    }
    return nums
};