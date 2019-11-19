/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    //轉陣列目的為方便刪字母
    ransomNote = ransomNote.split("");
    magazine = magazine.split("");
    for(i = 0; i < ransomNote.length; i++) {
        for(j = 0; j < magazine.length; j++) {
            //比對到相同字母時 刪除該字母
            if(ransomNote[i] == magazine[j]) {
                ransomNote.splice(i,1);
                i = i - 1;
                magazine.splice(j,1);
                break;
            }
        }
    }
    return ransomNote.join("") == ""
};