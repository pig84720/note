/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var A = 0,
        B = 0,
        secret = secret.split(""),
        guess = guess.split("");
    //比對位置和數字都相符時記錄到A 並刪除該位置數字
    for(i = 0 ;i < secret.length ;i++) {
        if(secret[i] == guess[i]) {
            A = A + 1;
            secret.splice(i,1);
            guess.splice(i,1);
            i = i - 1;
        }
    }
    //比對數字相同但位置不相同時記錄到B 並刪除該位置
    for(j = 0 ;j < secret.length ;j++) {
        for(k = 0 ;k < guess.length ;k++) {
            if(secret[j] == guess[k]) {
                B = B + 1;
                secret.splice(j,1);
                guess.splice(k,1);
                j = j - 1;
                break
            }
        }
    }
    return A + "A" + B + "B"
};