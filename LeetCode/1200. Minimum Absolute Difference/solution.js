/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    //num設大一點預防數字間隔都很大
    var num = 9999999,
        ans = [];
    //重新排列陣列由小到大
    arr = arr.sort(function (a,b) {
        return a - b;
    });
    //篩選出最小間隔
    for(i = 0; i < arr.length - 1; i++) {
        if( (arr[i + 1] - arr[i]) < num) {
            num = arr[i + 1] - arr[i];
        }
    }
    //若i與i+1項差距為最小間隔 紀錄之
    for(i = 0; i < arr.length - 1; i++) {
        if( (arr[i + 1] - arr[i]) == num) {
            ans.push([arr[i],arr[i + 1]]);
        }
    }
    return ans
};