/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //篩選單字長度是否相同
    if(s.length != t.length) {
        return false;
    //資料重整
    //split("要取代為逗號的部分")  將每個字元中間用逗號分隔
    //sort()  資料由小到大重新排序(若為單字或數字以第一個字元為準)
    //join("指定的分隔符號，空白代表沒間隔")
    } else {
        var s = s.split("").sort().join("");
        var t = t.split("").sort().join("");
        return t == s;
    }
    
};