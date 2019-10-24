/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    var ans = [],
        odd = [],
        even = [],
        len = 0;
    //以基偶數為分類標準 分別儲存
    for(i = 0; i < A.length; i++) {
        if(A[i] % 2 == 0) {
            even.push(A[i]);
        } else {
            odd.push(A[i]);
        }
    }
    if(odd.length > even.length) {
        len = odd.length;
    } else {
        len = even.length;
    }
    //偶/基數位置置入偶/基數
    for(j = 0; j < len; j++) {
    //避免偶基數其中一樣數量大於對方時發生錯誤
        if(j > even.length - 1) {
            break;
        } else {
            ans.push(even[j]);
        };
    //避免偶基數其中一樣數量大於對方時發生錯誤
        if(j > odd.length - 1) {
            break;
        } else {
            ans.push(odd[j]);
        };
    }
    return ans
};