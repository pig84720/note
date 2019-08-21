/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var num = 0;
    var numm = 0;
    for(i = 0; i<nums.length; i++){
    if(nums[i] != ','){
    num = num + nums[i];
    }
    else if(nums[i] === ','){
    num = num
    }    
    }
    for(i = 0; i<nums.length + 1;i++){
    numm = i + numm;    
    }
    var ans = numm - num;
    return ans
};