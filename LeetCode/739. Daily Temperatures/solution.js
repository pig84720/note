/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    var count = 0,
        ans = [];
    for(i = 0; i < T.length; i++) {
        if(i == T.length - 1) {
            ans.push(0);
            break;
        }
        for(j = i + 1; j < T.length; j++) {
            count++;
            if(T[j] > T[i]) {
                ans.push(count);
                count = 0;
                break;
            } else if(j == T.length - 1 && T[j] <= T[i]) {
                ans.push(0);
                count = 0;
            }
        }
    }
    return ans;
};