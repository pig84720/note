/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    //解題思路:
    //將陣列nums從小到大重新排列
    //有重複的數字留下一個 其餘砍掉
    nums = nums.sort(function(a,b) {
        return a - b;
    })
    for(i = 0; i < nums.length; i++) {
        if(i == nums.length - 1) {
            nums.splice(i,1);
        } else if(i == nums.length - 2 && nums[i] == nums[i + 1]) {
            continue;
        } else if(nums[i] !== nums[i + 1]) {
            nums.splice(i,1);
            i--
        } else {
            nums.splice(i,1);
        }
    }
    return nums
};