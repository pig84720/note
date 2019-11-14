/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    var num = 1,
        curve = "",
        //深層複製A陣列
        a = JSON.parse(JSON.stringify(A));
    //檢視原陣列為遞增或遞減
    for(i = 0; i < A.length; i++) {
        if (A[i] > A[num]) {
            curve = "small";
            break;
        } else if(A[i] < A[num]) {
            curve = "big";
            break;
        }
        num++
    }
    //若原陣列起始為遞減
    //將複製之陣列排序整形為由大到小
    //兩陣列轉為字串比較是否相同
    if(curve == "small") {
        a = a.sort(function(a,b) {
            return b - a;
        });
        a = a.join("");
        A = A.join("");
        return a == A;
    //概念同上
    } else if(curve == "big") {
        a = a.sort(function(a,b) {
            return a - b;
        });
        a = a.join("");
        A = A.join("");
        return a == A;
    //A陣列全為同一個數字時
    } else {
        return true;
    }
};