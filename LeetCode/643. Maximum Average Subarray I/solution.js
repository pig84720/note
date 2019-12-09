/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var box = [],
        num = 0;
    if(nums.length == 1) {
        return nums[0];
    }
    for(i = 0; i <= nums.length - k; i++) {
        for(j = i; j < i + k; j++) {
            num = num + nums[j];
        }
        num = num / k;
        box.push(num);
        num = 0;
    }
    box = box.sort(function(a,b) {
        return b - a;
    })
    return box[0];
};