/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    //紀錄母音
    var Vowels = ["a","e","i","o","u"];
    var box = [];
    //比對字串當中的母音丟進box
    for (i = 0 ; i < s.length ; i++) {
        for (j = 0 ; j < Vowels.length ; j++) {
            if (s[i] == Vowels[j]) {
                box.push(s[i]);
            }
        }
    };
    //將s轉為陣列方便修正
    var sAry = s.split("");
    var m = box.length -1;
    //重新比對字串當中的母音並以box當中的母音由後往前取代
    for (k = 0 ; k < sAry.length ; k++) {
        for (l = 0 ; l < Vowels.length ; l++) {
            if (sAry[k] == Vowels[l]) {
                sAry[k] == box[m--];
            }
        }
    };
    //s轉回字串
    var s = sAry.join("");
    return s
};