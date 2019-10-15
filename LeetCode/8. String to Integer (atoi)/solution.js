/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var box = ["1","2","3","4","5","6","7","8","9","0","+","-"],
        box2 = ["1","2","3","4","5","6","7","8","9","0"],
        num = [],
        //numTF、numTF2檢核時用
        numTF = "false",
        numTF2 = "false";
        //刪除空白格直到碰見第一個非空白格
    for(i = 0 ; i < str.length ; i++) {
        if(str[i] == " ") {
            str = str.substring(0, i) + str.substring(i+1);
            i = i - 1;
        }
        else if(str[i] != " "){
            break;
        }
    };
    for(j = 0 ; j < box.length ; j++){
        if(box[j] == str[0]) {
            //預防練續遇到正負號又進去跑一輪
            if(num != "") {
                break;
            }
            //若碰見的第一個符號為正負號或數字，紀錄numTF = "true",儲存它並刪除它
            numTF = "true";
            num.push(str[0]);
            str = str.substring(0, 0) + str.substring(0+1);
            //若碰見的第二個符號為數字則檢核成功跳出
            for(k = 0 ; k < box2.length ; k++) {
                if(box2[k] == str[0]) {
                    numTF2 = "true";
                    break;
                }
            }
                
        }
    };
    //檢核失敗回傳0
    if(numTF == "false") {
        return 0;
    } else if(numTF2 == "true") {
        //檢核成功者儲存數字直到遇見非數字
        for(l = 0 ; l < str.length ; l++) {
            if(isNaN(str[l]) || str[l] == " "){
                break;                    
            } else {
                num.push(str[l])  
            }
        }
    }
    //將答案轉為字串
    var num = num.join("");
    //回傳答案
    if(num != "" && num != "+" && num != "-" && num < 2147483647 && num > -2147483648) {
        return num;
    } else if(num >= 2147483647) {
        return 2147483647;
    } else if(num <= -2147483648) {
        return -2147483648;
    } else if(num == "+" || num == "-") {
        return 0;
    }
        
};