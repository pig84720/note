/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var Nums = JSON.parse(JSON.stringify(nums)),
        start = 0,
        end = 0;
    Nums = Nums.sort(function(a,b) {
        return a - b;
    });
    for(i = 0; i < nums.length; i++) {
        if(nums[i] !== Nums[i]) {
            start = i;
            break;
        }
    }
    for(j = nums.length - 1; j >= 0; j--) {
        if(nums[j] !== Nums[j]) {
            end = j;
            break;
        }
    }
    if(start == 0 && end == 0) {
        return 0;
    }
    return end - start + 1;
};