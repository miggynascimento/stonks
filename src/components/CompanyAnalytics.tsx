import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Chart } from './Chart';
import Summary from './Summary';
import Trades from './Trades';
import { buyingOpportunities } from '../helpers/buyingOpportunities';

type Props = {
    stockData: StockDataType;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export const CompanyAnalytics = ({ stockData }: Props) => {
  const classes = useStyles();
  const analyzedStockData = {
    ...stockData,
    opportunities: buyingOpportunities(stockData.prices),
  } as any as AnalyzedStockDataType;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={12}>
        <Paper className={classes.paper}>
          <h1>{analyzedStockData.name}</h1>
          <Chart stockData={analyzedStockData} />
        </Paper>
      </Grid>
      <Grid item xs={6} md={6}>
        <Paper className={classes.paper}>
          <Summary title="Profit" amount={`$${analyzedStockData.opportunities.profit}`} />
        </Paper>
      </Grid>
      <Grid item xs={6} md={6}>
        <Paper className={classes.paper}>
          <Summary title="Unrealized Profit" amount={`$${analyzedStockData.opportunities.unrealizedProfit}` || 'none'} />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Trades stockData={analyzedStockData} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CompanyAnalytics;
