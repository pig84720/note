/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var ans = [];
    //逐一比對 兩者相同時刪除nums2[j]並跳出
    for(i = 0 ;i < nums1.length ;i++) {
        for(j = 0 ;j < nums2.length ;j++) {
            if(nums1[i] == nums2[j]) {
                ans.push(nums2[j]);
                nums2.splice(j,1);
                break
            }
        }
    }
    return ans
};