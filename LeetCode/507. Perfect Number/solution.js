/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    var num1 = num,
        box = [],
        box2 = [],
        ans = [1],
        nb = 0,
        x = 0,
        count = 0;
    for(i = 0; i < num1; i++) {
        if(nb == 8) {
            nb = 0;
            box.push(num);
            break;
        } else {
            nb = 0;
        }
        for(j = 2; j < 10; j++) {
            if(num % j == 0 && num !== j) {
                box.push(j);
                num = num / j;
                break;
            } else {
                nb++
            }
        }
    }
    for(i = 0; i < box.length; i++) {
        for(j = 0; j < box.length; j++) {
            if(box[i] == box[j]) {
                x++
            }
        }
        if(x > 1) {
            for(k = 1; k < x; k++) {
                box2.push(Math.pow(box[i], k));
            }
            box.splice(i,x - 1);
            i--
        }
        x = 0
    }
    for(i = 0; i < box.length - 1; i++) {
        for(j = i + 1; j < box.length; j++) {
            if(box[i] * box[j] <= num1 / 2) {
                ans.push(box[i] * box[j]);
            }
        }
    }
    for(i = 0; i < box.length; i++) {
        for(k = 0; k < box2.length; k++) {
            if(box[i] * box2[k] <= num1 / 2) {
                for(l = 0; l < ans.length; l++) {
                    if(box[i] * box2[k] !== ans[l]) {
                        count++
                    }
                }
                if(count == ans.length) {
                    ans.push(box[i] * box2[k])
                }
                count = 0;
            }
        }
    }
    for(i = 0; i < box.length; i++) {
        for(j = 0; j < ans.length; j++) {
            if(box[i] !== ans[j]) {
                count++
            }
        }
        if(count == ans.length) {
            ans.push(box[i])
        }
        count = 0;
    }
    for(i = 0; i < ans.length; i++) {
        nb = nb + ans[i];
    }
    return nb == num1;
};