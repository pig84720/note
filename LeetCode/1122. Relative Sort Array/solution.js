/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    var ans = [];
    //將arr1由小到大重新排序
    arr1 = arr1.sort(function (a,b) {
        return a - b;
    });
    //以arr2的順序去檢查arr1 符合者記錄並刪除
    for(i = 0; i < arr2.length; i++) {
        for(j = 0; j < arr1.length; j++) {
            if(arr2[i] == arr1[j]) {
                ans.push(arr1[j]);
                arr1.splice(j,1);
                j = j - 1;
            }
        }
    };
    //剩下的紀錄在後面
    for(k = 0; k < arr1.length; k++) {
        ans.push(arr1[k]);
    };
    return ans
};