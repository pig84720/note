/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var ans;
    //逐一比對 出現次數等於2時回傳true
    for(i = 0 ;i < nums.length ;i++) {
        ans = 0;
        for(j = 0 ;j < nums.length ;j++) {
            if(nums[i] == nums[j] ) {
                ans = ans + 1;
            }
            if(ans == 2) {
                return true
            }
        }
    }
    return false
};