/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var ans = [];
    //宣告一個空的陣列，將題目顛倒塞進去
    for(i = s.length - 1;i >= 0;i--) {
        ans.push(s[i]);
    };
    //將ans複寫回題目給的陣列s
    for(j = 0;j < ans.length;j++) {
        s[j] = ans[j];
    };
    return s;
};