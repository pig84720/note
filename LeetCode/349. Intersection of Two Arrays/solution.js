/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var ans = [],
        //檢核是否與答案區數字重複時用上
        TF = 0;
    //將兩陣列元素逐一比對
    for(i = 0 ;i < nums1.length ;i++) {
        for(j = 0 ;j < nums2.length ;j++) {
            //若兩陣列元素不相同且答案區沒東西時直接寫入
            if(nums1[i] == nums2[j] && ans.length == 0){
                ans.push(nums1[i]);
                //檢查是否與答案區內元素重複
                //未重複者寫入
            } else if(nums1[i] == nums2[j]) {
                TF = 0;
                for(k = 0 ;k < ans.length ;k++) {
                    if(nums1[i] != ans[k]) {
                        TF = TF + 1;
                    }
                }
                if(TF == ans.length) {
                    ans.push(nums1[i]);
                }
            }
        }
    }
    return ans
};