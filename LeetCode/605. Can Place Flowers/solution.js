/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(i = 0; i < flowerbed.length; i++) {
        if(n == 0) {
            break;
        } else if(i == 0 && flowerbed[i] == 0 && flowerbed[i + 1] == 0) {
            flowerbed[i] = 1;
            n = n - 1;
            if(n == 0) {
                return true;
            }
        } else if(flowerbed[i] == 0 && flowerbed[i + 1] == 0 && flowerbed[i - 1] == 0) {
            flowerbed[i] = 1;
            n = n - 1;
            if(n == 0) {
                return true;
            }
        } else if(i == flowerbed.length - 1 && flowerbed[i] == 0 && flowerbed[i - 1] == 0) {
            flowerbed[i] = 1;
            n = n - 1;
            if(n == 0) {
                return true;
            }
        } else if(flowerbed.length == 1 && flowerbed[i] == 0){
            flowerbed[i] = 1;
            n = n - 1;
        }
    }
    return n == 0;
};