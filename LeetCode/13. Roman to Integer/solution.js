/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //用map來儲存符號與數字的關係
    var map = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    }; 
    var ans = 0;
    
    for (i = 0 ; i < s.length ; i++) {
        var num1 = map[s[i]];
        var num2 = map[s[i+1]];
        //與下一個數字比較
        //若前者小於後者則兩個數字一起解決
        if (num1 < num2) {
            ans = ans + num2 - num1;
            i++;
        } else {
            ans = ans + num1;
        } 
    }
    return ans
};