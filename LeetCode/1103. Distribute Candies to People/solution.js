/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    var num = [],
        ball = 1;
    //建立一個陣列 在裡面塞進num_people個0
    for(i = 0; i < num_people; i++) {
        num.push(0);
    };
    //維持內層不斷塞數字用途的外層 j夠大即可 
    for(j = 0; j < 999; j++) {
        //糖果分完 跳出
        if(candies == 0) {
            break;
        }
        //依序分給每個人該拿到的糖果數
        //隨時判斷糖果數是否歸零
        //歸零則跳出
        for(k = 0; k < num_people; k++) {
            if(candies >= ball) {
                num[k] = num[k] + ball;
                candies = candies - ball;
                ball++;
            } else {
                num[k] = num[k] + candies;
                candies = 0;
                break;
            }
            
        }
    }
    return num;
};