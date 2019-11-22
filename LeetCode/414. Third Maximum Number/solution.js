/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    //將陣列整形為由大到小排序
    nums = nums.sort(function(a,b) {
                     return b - a;
                     });
    var num = 1,
        ans = 0;
    for(i = 0; i < nums.length; i++) {
        //當第i項不等於i + 1項且第i項不為最後一項時
        if(nums[i] !== nums[num] && i !== nums.length - 1) {
            ans = ans + 1;
            //第三大的數字出現
            if(ans == 2) {
                return nums[num];
            }
        }
        num++;
    }
    //回傳陣列中最大的數字
    return nums[0];
};