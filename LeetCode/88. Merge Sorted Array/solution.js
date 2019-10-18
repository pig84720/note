/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(i = nums1.length - 1 ;i >= 0 ;i--) {
        if(nums1[i] == 0) {
            //刪除nums1後方的0直到nums1的長度等於m
            nums1.splice(i,1);
            if(nums1.length == m) {
                break;
            }
        } else {
            break;
        }
    }
    //將nums2全數寫進nums1
    for(j = 0 ;j < nums2.length ;j++) {
        nums1.push(nums2[j]);
    }
    //整形為由小到大
    nums1.sort(function (a, b) {
        return a - b
    });
    
    return nums1
};