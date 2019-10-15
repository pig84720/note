/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(SS) {
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
    //將吃進來的資料轉小寫
    var S = SS.toLowerCase();
    //轉為陣列
    var T = S.split("");
    var U = [];
    //符合字母數字者丟進U陣列中
    for (i = 0 ; i < T.length ; i++) {
        for(j = 0 ; j < alphabet.length ; j++){
            if(T[i] == alphabet[j]){
                U.push(T[i]);
            }
        }
    };
    //深層複製U陣列(因reverse()會連帶改變本身陣列內容)
    var arr2 = copyArr(U);
    function copyArr(U) {
        let res = [];
        for (let i = 0; i < U.length; i++) {
            res.push(U[i])
        }
        return res
    };
    //對U陣列reverse()後比較是否相同
    var Ary = arr2.join(""),
        V = U.reverse(),
        VV = V.join("");

    return VV == Ary; 
};