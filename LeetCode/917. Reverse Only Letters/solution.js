/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    var letters = [],
        //正則表達式 包含所有英文字母
        isletter = /^[a-zA-Z]+$/,
        NO = 0;
    //將所有字母記錄起來
    for(i = 0; i < S.length; i++) {
        if(isletter.test(S[i])) {
            letters.push(S[i]);
        } 
    };
    S = S.split("");
    //反轉紀錄的字母順序
    letters = letters.reverse();
    //將S陣列中所有字母位置以顛倒後的字母替換
    for(i = 0; i < S.length; i++) {
        if(isletter.test(S[i])) {
            S[i] = letters[NO];
            NO++;
        }
    };
    return S.join("");
};