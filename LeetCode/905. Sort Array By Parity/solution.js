/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {

    temp = 0; 
    //方便A[i]和A[i+1]交換位置
    for(i = 0;i < A.length-1; i++){
        if(A[i] %2 > A[i+1] %2){
            //有餘數者往後移動
            temp = A[i+1];
            A[i+1] = A[i];
            A[i] = temp;
            i = i-2;
            //檢查上一項是否為基數
            if(i < -1){
                i = -1;
                //避免第0項就換位置時i變負數
            }
        }
    }
return A    
};