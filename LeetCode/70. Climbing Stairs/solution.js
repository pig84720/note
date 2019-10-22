/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //這題是在算費氏數列
    //費氏數列: f(0) = 0,f(1) = 1,f(n) = f(n-1) + f(n-2)
    var box = [];
    for(i = 0 ;i < n + 1 ;i++) {
        if(i == 0 || i == 1) {
            box.push(i);
        } else {
            box.push(box[i - 1] + box[i - 2]);
        }
    }
    if(n == 1) {
        return 1
    } else {
        //ans = 最後兩項相加
                return box[box.length - 1] + box[box.length - 2]
    }
};