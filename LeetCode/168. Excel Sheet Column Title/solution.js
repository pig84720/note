/**
 * @param {string} s
 * @return {number}
 */
var convertToTitle = function(n) {
    //用map紀錄字母與數字的關係
    var map = {1:'A',2:'B',3:'C',4:'D',5:'E',6:'F',7:'G',8:'H',9:'I',10:'J',
        11:'K',12:'L',13:'M',14:'N',15:'O',16:'P',17:'Q',18:'R',19:'S',20:'T',21:'U',
        22:'V',23:'W',24:'X',25:'Y',26:'Z'};
    
    var box = 0,
        N = [];
    //數字不能大於26的6次方 故最多跑6次
    for(i = 0 ; i <=6 ; i++) {
        //n除26有餘數且n>26時處理方式
        if(n % 26 != 0 && n > 26) {
            //將餘數儲存
            N.push(map[n % 26]);
            //n減去餘數避免再除以26時餘數有小數點
            n = n - n % 26;
            n = n / 26
            //n可整除26且n>26時處理方式
        } else if(n % 26 == 0 && n > 26) {
            n = n / 26;
            //除以26後有餘數且n>26處理方式
            if (n % 26 != 0  && n > 26) {
                N.push("Z");
                n = n - n % 26;
            //除以26後沒餘數且n<26時處理方式
            } else {
                N.push("Z");
                n = n - 1;
            }
        //n<26直接儲存
        } else if(n <= 26) {
            N.push(map[n]);
            break;
        }
    }
    //反轉後轉字串輸出
    var N = N.reverse();
    var N = N.join("");
    return N
};