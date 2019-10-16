/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    //深層複製A陣列
    var B = JSON.parse(JSON.stringify(A));
    var length = A.length;
    for(i = 0; i < length; i++){
        for(j = 0; j < length; j++){
           //順序顛倒和01互換
           if(A[i][j] === 0){
            B[i][length - 1 - j] = 1;
           }
           if(A[i][j] === 1){
            B[i][length - 1 - j] = 0; 
           }
       }    
    }
    return B;
};