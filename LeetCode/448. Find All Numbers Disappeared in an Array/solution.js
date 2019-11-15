/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var len = nums.length,
        box = [];
    //將box陣列塞入1~nums.length
    for(i = 1; i <= len; i++) {
        box.push(i);
    };
    nums = nums.sort(function(a,b){
        return a - b;
    })
    //將box中含有nums內元素之項目刪除
    for(j = 0; j < nums.length; j++) {
        if(j == 0 || nums[j] != nums[j - 1]) {
           for(k = 0; k < box.length; k++) {
              if(nums[j] == box[k]) {
                  box.splice(k,1);
                  break;
              }
           } 
        }  
    }
    return box;
};