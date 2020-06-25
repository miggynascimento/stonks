import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import Title from './Title';

function getRange(open: number, close?: number) {
  const openDate = moment().month(open).format('MMMM');
  const closeDate = close ? moment().month(close).format('MMMM') : '(current)';
  return `${openDate} - ${closeDate}`;
}

type Props = {
  stockData: AnalyzedStockDataType;
}

export default function Trades({ stockData }: Props) {
  return (
    <>
      <Title>Trades</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Buy Price</TableCell>
            <TableCell>Sell Price</TableCell>
            <TableCell>Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockData.opportunities.buyIndices.map((row: number, index: number) => {
            const closePrice = stockData.prices[stockData.opportunities.exitIndices[index]];
            return (
              <TableRow key={index}>
                <TableCell>{getRange(row, stockData.opportunities.exitIndices[index])}</TableCell>
                <TableCell>{`$${stockData.prices[row]}`}</TableCell>
                <TableCell>{closePrice ? `$${closePrice}` : '-'}</TableCell>
                <TableCell>
                  $
                  {stockData.prices[stockData.opportunities.exitIndices[index]] - stockData.prices[row] || `${stockData.opportunities.unrealizedProfit} (unrealized)`}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
