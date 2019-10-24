/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    //記錄三行鍵盤
    var alphabet = ["qwertyuiop","asdfghjkl","zxcvbnm"],
        num = 0,
        ans = [],
    //深層複製words 回傳答案時使用
    Words = JSON.parse(JSON.stringify(words));
    //複製品轉小寫
    for(l = 0; l < Words.length; l++) {
        Words[l] = Words[l].toLowerCase();
    }
    //三行鍵盤逐一與單字中各字母比對
    for(i = 0; i < alphabet.length; i++) {
        for(j = 0; j < Words.length; j++) {
            for(k = 0; k < Words[j].length; k++) {
                if(alphabet[i].indexOf(Words[j][k]) != -1) {
                    num = num + 1;
                }
            }
            if(num == Words[j].length) {
                ans.push(words[j]);
            }
            num = 0;
        }
    }
    return ans
};