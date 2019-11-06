/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    var box = [];
    //依照Tribonacci序列的定義紀錄T 範圍0~n
    for(i = 0; i <= n; i++) {
        if(i == 0) {
            box.push(0);
        } else if(i == 1 || i == 2) {
            box.push(1)
        } else {
            box.push(box[i-1] + box[i-2] + box[i-3]);
        }
    }
    //回傳Tn
    return box[box.length - 1];
};