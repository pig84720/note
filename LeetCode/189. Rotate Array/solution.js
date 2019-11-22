/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var num = 0;
    for(i = 0; i < k; i++) {
        //先將第一項紀錄起來 並替換為最後一項
        num = nums[0];
        nums[0] = nums[nums.length - 1];
        for(j = nums.length - 1; j >= 1; j--) {
            //跑到第二項時
            if(j == 1) {
                nums[j] = num;
            //每項都以前一項的數字替換
            } else {
                nums[j] = nums[j - 1];
            }   
        }
    }
    return nums;
};