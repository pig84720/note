/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var count = 0;
    //以空白鍵為間隔 分離字串
    s = s.split(" ");
    //檢核字串是否為空的
    for(i = 0; i < s.length; i++) {
        if(s[i]) {
            count++
        }
    }
    return count;
};