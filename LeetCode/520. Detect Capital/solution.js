/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var letter = word,
        Calculate = 0;
    //複製word字串，並轉為大寫
    letter = letter.toUpperCase();
    //紀錄word和letter相同的字母數量
    for(i = 0;i < word.length; i++) {
        if(word[i] == letter[i]) {
            Calculate = Calculate + 1;
        }
    }
    //除第一個字相同其餘皆不同時。ex:Google
    if(word[0] == letter[0] && Calculate == 1) {
        return true;
    //全部字母皆相同時。ex:USA
    } else if(word[0] == letter[0] && Calculate == word.length) {
        return true;
    //全部字母皆不同時。ex:leetcode
    } else if(Calculate == 0) {
        return true;
    }
    return false;
};