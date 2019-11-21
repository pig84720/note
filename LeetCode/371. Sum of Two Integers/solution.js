/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    //若b小於0 a遞減b次
    if(b < 0) {
        for(i = 0; i < (-b); i++) {
            a--;
        }
    //若b大於0 a遞增b次
    } else if(b > 0) {
        for(i = 0; i < b; i++) {
            a++;
        }
    }
    return a
};