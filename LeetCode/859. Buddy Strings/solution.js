/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    var box1 = [],
        box2 = [],
        num = 0;
    for(i = 0; i < A.length; i++) {
        if(A[i] !== B[i]) {
            box1.push(A[i]);
            box2.push(B[i]);
        }
        num = 0;
        for(j = 0; j < A.length; j++) {
            if(A[i] == A[j]) {
                num = num + 1;
            }
        }
    }
    box1 = box1.reverse();
    if(A == "") {
        return false;
    } else if(box1.length == 0 && A !== B) {
        return false;
    } else if(box1.length == 0 && num < 2) {
        return false;
    } else if(A == B && num > 1) {
        return true;
    } else {
        return box1.join("") == box2.join("");        
    }
};