/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //將s轉換為陣列，以空白鍵為分隔點
    var sAry = s.split(" ");
    var len = sAry.length -1;
    //檢查最後一個元素，若為空的("")繼續往前檢查
    for(i = 0 ; i < sAry.length -1 ; i++){
        if(sAry[len].length == 0) {
            len = len - 1;
        }
    };
    //回傳最後一個不是空的元素長度
    return sAry[len].length;
};