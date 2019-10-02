/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var num = 0;
    var numm = 0;
    for(i = 0; i<nums.length; i++){
    num = num + nums[i];    
    }
    //題目給的數字加總
    for(i = 0; i<nums.length + 1;i++){
    numm = i + numm;    
    }
    //nums完整的加總，含遺失的數字
    var ans = numm - num;
    return ans
};
