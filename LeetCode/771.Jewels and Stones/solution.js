/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var jewels_counter = 0
    for(i=0; i<S.length; i++){
        var stone = S[i]
        //挑出石頭
        for(j=0; j<J.length; j++){
            var jewel = J[j]
            //挑出寶石
            if(stone === jewel){
                jewels_counter = jewels_counter + 1
            }
            //比對出符合寶石的石頭數量
        }
    }
    
    return jewels_counter
};