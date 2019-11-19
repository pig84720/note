/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var ans = [];
    for(i = 0; i < numbers.length; i++) {
        //numbers[i] > target時跳出 減少運算時間
        if(numbers[i] > target){
            break;
        } else {
            for(j = i + 1; j < numbers.length; j++) {
                //numbers[i] > target時跳出 減少運算時間 但target不得為負數
                if(numbers[j] > target && target > 0) {
                   break; 
                } else {
                    if(numbers[i] + numbers[j] == target) {
                        //numbers[i]和numbers[j]相等時 indexOf只會找到i的位置
                        //因此設numbers[j] = numbers[j] + 1,目的是和numbers[i]區別
                        if(numbers[i] == numbers[j]) {
                            ans.push(numbers.indexOf(numbers[i]) + 1);
                            numbers[j] = numbers[j] + 1;
                            ans.push(numbers.indexOf(numbers[j]) + 1)
                        } else {
                            ans.push(numbers.indexOf(numbers[i]) + 1);
                            ans.push(numbers.indexOf(numbers[j]) + 1);
                        }   
                    }
                }  
            }
        }
    }
    return ans;
};