/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    var count = 0,
        ans = [],
        box = [];
    //在ans中照S陣列字母順序塞入T陣列中與S陣列內相符的字母
    for(i = 0; i < S.length; i++) {
        for(j = 0; j < T.length; j++) {
            if(S[i] == T[j]) {
                ans.push(S[i]);
            }
        }
    }
    //紀錄ans內字母種類在box
    for(i = 0; i < ans.length; i++) {
        if(i == 0) {
            box.push(ans[i]);
        } else if(ans[i] != ans[i - 1]) {
            box.push(ans[i]);
        }
    }
    //T陣列中只要不是box陣列中含有的字母就塞進ans
    for(i = 0; i < T.length; i++) {
        for(j = 0; j < box.length; j++) {
            if(box[j] !== T[i]) {
                count++;
            }
        }
        if(count == box.length) {
            ans.push(T[i]);
        }
        count = 0;
    }
    return ans.join("");
};