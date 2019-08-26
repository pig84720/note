/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {

    var temp = 0;
    var temp2 = 0;
    var ans = 0;
for(i = 30; i >=0 ; i--){
    temp = 0;
    temp2 = 0;
    //跑進下個i時重置
    if(x - Math.pow(2, i) >= 0){
       temp =  1;
       x = x - Math.pow(2, i); 
       }
    if(y - Math.pow(2, i) >= 0){
       temp2 =  1;  
       y = y - Math.pow(2, i); 
    }
    //檢驗xy是否比2的i次方大
    //若兩者相異ans+1
    if(temp != temp2){
    ans = ans + 1;
    }

}

    return ans
};