/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //以空白鍵為區隔將單字分開
    s = s.split(" ");
    var ans = [],
        box = "";
    //將單字分別取出 反轉後記錄
    for(i = 0; i < s.length; i++) {
        box = s[i];
        box = box.split("");
        box = box.reverse();
        if(i < s.length - 1){
            box.push(" ");
        }
        box = box.join("");
        ans.push(box);
    }
    return ans.join("")
};