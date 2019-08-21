/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var jewels_counter = 0
    for(i=0; i<S.length; i++){
        var stone = S[i]
        for(j=0; j<J.length; j++){
            var jewel = J[j]
            if(stone === jewel){
                jewels_counter = jewels_counter + 1
            }
        }
    }
    
    return jewels_counter
};