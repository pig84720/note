/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    //用map儲存四個按鍵與數字的關係
    //盡可能不是倍數關係 降低出現Bug情形
    var map = {
        "U":5,"D":-5,"R":19,"L":-19
    };
    var ans = 0;
    for(i = 0 ;i < moves.length ;i++) {
        ans = ans + map[moves[i]];
    }
    return ans == 0
};