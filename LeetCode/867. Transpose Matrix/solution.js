/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    var box = [],
        ans = [];
    //A陣列中各個子陣列相同位置(由小到大)取出組成新陣列
    for(i = 0; i < A[0].length; i++) {
        box = [];
        for(j = 0; j < A.length; j++) {
            box.push(A[j][i]);
        }
        if(box.length != 0) {
            ans.push(box);
        }
    }
    return ans
};