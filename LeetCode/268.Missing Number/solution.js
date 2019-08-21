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
    //nums加總
    else if(nums[i] === ','){
    num = num
    }
    //篩掉','    
    }
    for(i = 0; i<nums.length + 1;i++){
    numm = i + numm;    
    }
    //nums完整的加總，含遺失的數字
    var ans = numm - num;
    return ans
};