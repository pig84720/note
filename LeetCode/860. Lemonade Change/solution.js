/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var how_many_5 = 0,
        how_many_10 = 0;
    for(i = 0; i < bills.length; i++) {
        if(bills[i] == 5) {
            how_many_5++;
        } else if(bills[i] == 10) {
            how_many_10++;
            //沒五塊找給客人時
            if(how_many_5 == 0) {
                return false;
            } else {
                how_many_5--;
            }
        } else if(bills[i] == 20) {
            if(how_many_10 != 0) {
                //有十塊時先拿去找
                how_many_10--;
                //沒五塊找給客人時
                if(how_many_5 == 0) {
                    return false;
                } else {
                    how_many_5--;
                }
            } else {
                //沒十塊且不足三個五塊找給客人時
                if(how_many_5 < 3) {
                    return false;
                } else {
                    how_many_5 = how_many_5 - 3;
                }
            }
        }
    }
    return true;
};