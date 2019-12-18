/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    //解題思路:
    //紀錄pattern和words中各字串組成格式並比較之
    var letter = [],
        box_pattern = [],
        box = [],
        box_words = [],
        count = 0,
        ans = [];
    for(i = 0; i < pattern.length; i++) {
            if(i == 0) {
                letter.push(pattern[i]);
            } else {
                for(j = 0; j < letter.length; j ++) {
                    if(pattern[i] !== letter[j]) {
                        count++;
                    }
                }
            }
            if(letter.length == count && i != 0) {
                letter.push(pattern[i]);
            }
            count = 0;
        }
        for(i = 0; i < pattern.length; i++) {
            for(j = 0; j < letter.length; j++) {
                if(pattern[i] == letter[j]) {
                    box_pattern.push(j);
                    break;
                }
            }
        }
    box_pattern = box_pattern.join("");
    for(k = 0; k < words.length; k++) {
        letter = [];
        box = [];
        num = 1;
        for(i = 0; i < words[k].length; i++) {
            if(i == 0) {
                letter.push(words[k][i]);
            } else {
                for(j = 0; j < letter.length; j ++) {
                    if(words[k][i] !== letter[j]) {
                        count++;
                    }
                }
            }
            if(letter.length == count && i != 0) {
                letter.push(words[k][i]);
            }
            count = 0;
        }
        for(i = 0; i < words[k].length; i++) {
            for(j = 0; j < letter.length; j++) {
                if(words[k][i] == letter[j]) {
                    box.push(j);
                    break;
                }
            }
        }
        box_words.push(box.join(""));
    }
    for(i = 0; i < box_words.length; i++) {
        if(box_words[i] == box_pattern) {
            ans.push(words[i]);
        }
    }
    return ans;
};