/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var count = 0,
        ans = [];
    //strs為空陣列時
    if(!strs.length) {
        return "";
    }
    //外層為陣列中各項目的第i個字母
    for(i = 0; i < strs[0].length; i++) {
        //判斷寫在這是因想在不符合檢核情況時不繼續跑
        if(count == strs.length) {
            ans.push(strs[0][i - 1]);
            count = 0;
        } else if(count !== strs.length && i !== 0) {
            break;
        }
        for(j = 0; j < strs.length; j++) {
            if(strs[j][i] == strs[0][i]) {
                count++;
            }
            //i == strs[0].length - 1時不會再跑進來 所以判斷寫在這
            if(i == strs[0].length - 1 && count == strs.length) {
                ans.push(strs[0][i]);
            }
        }
    }
    if(ans.length !== 0) {
        return ans.join("");
    } else {
        return "";
    }
};