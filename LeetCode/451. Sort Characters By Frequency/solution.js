/**
 * @param {string} s
 * @return {string}
 */
//解題思路:
//先將s陣列重整為照順序排列(同樣的字母排在一起)
//遍歷整個陣列，[字母,出現次數]紀錄在box，所有的出現次數(重複的只取一個)記錄在count_Ary
//將count_Ary從大到小排列，用for迴圈跑，比對box中出現次數相符的字母，再用for迴圈塞"出現次數"個該字母進ans
var frequencySort = function(s) {
    var box = [],
        count_Ary = [],
        count = 1,
        ans = [];
    s = s.split("").sort();
    for(i = 0; i < s.length; i++) {
        if(s[i] == s[i + 1]) {
            count++
        } else {
            box.push([s[i],count]);
            if(count_Ary.length == 0) {
                count_Ary.push(count);
            } else {
                if(count_Ary.indexOf(count) == -1) {
                    count_Ary.push(count);
                }
            }
            count = 1;
        }
    }
    count_Ary = count_Ary.sort(function(a,b) {
        return b - a;
    })
    for(i = 0; i < count_Ary.length; i++) {
        for(j = 0; j < box.length; j++) {
            if(count_Ary[i] == box[j][1]) {
                for(k = 0; k < box[j][1]; k++) {
                    ans.push(box[j][0]);
                }
            }
        }
    }
    return ans.join("");
};