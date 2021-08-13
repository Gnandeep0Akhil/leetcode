/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxprofit = 0;
    for (i=0; i<prices.length; i++){
        let buy = prices[i];
        for(j = i+1; j<prices.length; j++){
            let sell = prices[j];
            if (sell - buy > maxprofit){
                maxprofit = sell - buy;
            }
        }
    }
    return maxprofit;
};
