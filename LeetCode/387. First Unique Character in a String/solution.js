/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var S = s;
    S = S.split("").reverse();
    for(i = 0; i < s.length; i++) {
        if(S.indexOf(s[i]) + s.indexOf(s[i]) == s.length - 1) {
            return s.indexOf(s[i]);
        }
    }
    return -1;
};