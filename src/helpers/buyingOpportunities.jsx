export const buyingOpportunities = (stockPrices) => {
    let buyIndices = [];
    let exitIndices = [];
    let profit = 0;
    let unrealizedProfit = 0;
    let entry = 0;
    let exit = 0;
    stockPrices.forEach((price, index) => {
        if(price < stockPrices[index + 1] && price < stockPrices[index-1]) {
            entry = price;
            buyIndices.push(index);
        } else if(price < stockPrices[index + 1] && !stockPrices[index-1]) {
            entry = price;
            buyIndices.push(index);
        } else if (price > stockPrices[index-1] && price > stockPrices[index+1]) {
            exit = price;
            profit = profit + (exit - entry);
            entry = 0;
            exit = 0;
            exitIndices.push(index);
        }

        if (stockPrices.length === index + 1 && entry !== 0) {
            unrealizedProfit = price - entry;
        }
    })

    return { buyIndices, exitIndices, profit, unrealizedProfit };
}