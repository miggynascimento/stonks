/// <reference types="react-scripts" />

declare interface StockDataType {
    id: number;
    name: string;
    prices: array<number>;
};

declare interface AnalyzedStockDataType extends StockDataType {
    opportunities: StockOpportunitiesType;
};

declare interface StockOpportunitiesType {
    buyIndices: array<number>;
    exitIndices: array<number>;
    profit: number;
    unrealizedProfit: number;
};