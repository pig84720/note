/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    S = S.split("");
    //檢查是否有成組括號
    //找到時整組刪除並從頭檢查是否有新組成的成組括號
    for(i = 0; i < S.length; i++) {
        if(S[i] == "(" && S[i + 1] == ")") {
            S.splice(i,2);
            i = -1;
        }
    }
    return S.length;
};