/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
//提摩必須死
var findPoisonedDuration = function(timeSeries, duration) {
    var time = 0;
    for(i = 0; i < timeSeries.length; i++) {
        if(i == timeSeries.length - 1) {
            time = time + duration;
        } else if(timeSeries[i + 1] - timeSeries[i] < duration) {
            time = time + (timeSeries[i + 1] - timeSeries[i]);
        } else {
            time = time + duration;
        }
    }
    return time
};