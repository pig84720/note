/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    //比對起點為自身位置+1 終點自身位置+k
    for(i = 0 ;i < nums.length ;i++) {
        for(j = i + 1 ;j <= i + k ;j++) {
            if(nums[i] == nums[j]) {
                return true;
            //位置為陣列最後一個元素且比對成功時
            } else if(nums[i] == nums[j] && j == nums.length - 1) {
                return true;
                break
            //比對到陣列最後一個元素時
            } else if(j == nums.length - 1) {
                break
            }
        }
    }
    return false
};