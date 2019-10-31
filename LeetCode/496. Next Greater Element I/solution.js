/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    var index = 0,
        ans = [],
        num = 0;
    for(i = 0; i < nums1.length; i++) {
        //找出nums1[i]在nums2中的位置
        index = nums2.indexOf(nums1[i]);
        //記錄答案區的長度
        num = ans.length;
        //nums2從index開始往後找
        for(j = index; j < nums2.length; j++) {
            if(nums1[i] < nums2[j]) {
                ans.push(nums2[j]);
                break;
            }
        }
        //此時答案區若長度相同代表後方沒有更大的數 儲存-1
        if(num == ans.length) {
            ans.push(-1);
        }
    }
    return ans;
};