/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    //字母順序整形
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    var num = 0,
        ans = [];
    //發現s,t相異的字母或t在尾部多出的字母直接回傳
    for(i = 0; i < t.length; i++) {
        if(t[i] != s[num] || i == s.length) {
            ans.push(t[i]);
            ans = ans.toString();
            return ans;
        }
        num++
    }
};