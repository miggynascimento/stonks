import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import moment from 'moment';

function getRange(open, close) {
  let openDate = moment().month(open).format("MMMM");
  let closeDate = close ? moment().month(close).format("MMMM") : '(current)';
  return `${openDate} - ${closeDate}`;
}

export default function Trades({stockData}) {
  return (
    <React.Fragment>
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
          {stockData.opportunities.buyIndices.map((row, index) => {
            let closePrice = stockData.prices[stockData.opportunities.exitIndices[index]];
            return(
            <TableRow key={index}>
              <TableCell>{getRange(row, stockData.opportunities.exitIndices[index])}</TableCell>
              <TableCell>{`$${stockData.prices[row]}`}</TableCell>
              <TableCell>{closePrice ? `$${closePrice}` : '-'}</TableCell>
              <TableCell>${stockData.prices[stockData.opportunities.exitIndices[index]] - stockData.prices[row] || stockData.opportunities.unrealizedProfit + ' (unrealized)'}</TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
