/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//解題思路:
//找出s,t字串的組成類型 ex:01221
//先紀錄單字裡所有字母種類 再以indexOf得到組成類型
//比較兩者組成類型是否相同
var isIsomorphic = function(s, t) {
    var box1 = [],
        s_index = [],
        box2 = [],
        t_index = [],
        count = 0;
    for(i = 0; i < s.length; i++) {
        if(box1.length == 0) {
            box1.push(s[i]);
        } else {
            for(j = 0; j < box1.length; j++) {
                if(s[i] !== box1[j]) {
                    count++;
                }
            }
            if(count == box1.length) {
                box1.push(s[i]);
            }
            count = 0;
        }
    }
    for(i = 0; i < s.length; i++) {
        s_index.push(box1.indexOf(s[i]));
    }
    for(i = 0; i < t.length; i++) {
        if(box2.length == 0) {
            box2.push(t[i]);
        } else {
            for(j = 0; j < box2.length; j++) {
                if(t[i] !== box2[j]) {
                    count++;
                }
            }
            if(count == box2.length) {
                box2.push(t[i]);
            }
            count = 0;
        }
    }
    for(i = 0; i < t.length; i++) {
        t_index.push(box2.indexOf(t[i]));
    }
    return s_index.join("") == t_index.join("")
};