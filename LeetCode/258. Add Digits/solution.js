/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var ans = 0, 
        Num,
        Ans;
    //num轉字串，方便取各個位置的數字相加
    num = num.toString();
    for(i = num.length - 1 ; i >= 0 ; i--) {
        //每次跑進來都將num[i]轉回數字
        Num = parseInt(num[i]);
        ans = ans + Num;
        //加完一組後跑進來
        if(i == 0){
            //將加完的數字轉字串並取代原本的num
            Ans = ans.toString(); 
            i = Ans.length;
            num = Ans;
            ans = 0;
            //加到只剩個位數停止
            if(num.length == 1){
                break;
            }
        }
    }
    //答案轉回數字回傳
    var num = parseInt(num);
    return num
};