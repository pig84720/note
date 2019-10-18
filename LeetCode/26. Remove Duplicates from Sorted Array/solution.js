/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //深層複製陣列
    var box = JSON.parse(JSON.stringify(nums)),
        num = 0;
    //逐一檢驗是否重複 重複者刪除
    for(i = 0 ;i < nums.length ;i++) {
        num = 0;
        for(j = 0 ;j < box.length ;j++) {
            if(nums[i] == box[j]) {
                num = num + 1;
                if(num >= 2) {
                    nums.splice(j,1);
                    box.splice(j,1);
                    j = j - 1;
                }
            }
        }
    }
    var val = nums.length;
    return nums,val
};