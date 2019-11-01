/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    var ans = [];
    //轉二進位
    N = N.toString("2");
    N = N.split("");
    //1變0，0變1 記錄起來
    for(i = 0; i < N.length; i++) {
        if(N[i] == 0) {
            ans.push("1");
        } else {
            ans.push("0");
        }
    }
    //轉十進位
    ans = ans.join("");
    return parseInt(ans,2);
};