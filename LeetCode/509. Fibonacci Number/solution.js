/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    var box = [];
    //費氏數列: f(0) = 0,f(1) = 1,f(n) = f(n-1) + f(n-2)
    for(i = 0 ;i < N + 1 ;i++) {
        if(i == 0 || i == 1) {
            box.push(i);
        } else {
            box.push(box[i - 1] + box[i - 2]);
        }
    }
    if(N == 1) {
        return 1
    } else {
        return box[box.length - 1];
    }
};