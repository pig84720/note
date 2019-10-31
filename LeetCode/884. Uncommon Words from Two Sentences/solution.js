/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    var box = [],
        ans = [];
    A = A.split(" ");
    B = B.split(" ");
    //將AB兩陣列合併並照英文字母順序重新排序(相同的單字一定會相連)
    box = A.concat(B);
    box = box.sort();
    for(i = 0; i < box.length; i ++) {
        //跑第一項時檢核方式
        if(i == 0) {
            if(box[i] !== box[i + 1]) {
                ans.push(box[i]);
            }
        //跑最後一項時檢核方式
        } else if(i == box.length - 1) {
            if(box[i] !== box[i - 1]) {
                ans.push(box[i]);
            }
        //跑其餘項時檢核方式
        } else {
            if(box[i] !== box[i + 1] && box[i] !== box[i - 1]) {
                ans.push(box[i]);
            }
        }
    }
    return ans
};