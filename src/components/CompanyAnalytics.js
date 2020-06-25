import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Chart } from './Chart';
import Summary from './Summary';
import Trades from './Trades';
import { makeStyles } from '@material-ui/core/styles';
import { buyingOpportunities } from '../helpers/buyingOpportunities';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export const CompanyAnalytics = ({stockData}) => {
    const classes = useStyles();
    stockData = {
        ...stockData,
        opportunities: buyingOpportunities(stockData.prices),
    }
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={12}>
              <Paper className={classes.paper}>
                <Chart stockData={stockData}/>
              </Paper>
            </Grid>
            <Grid item xs={6} md={6}>
              <Paper className={classes.paper}>
                <Summary title="Profit" amount={`$${stockData.opportunities.profit}`} />
              </Paper>
            </Grid>
            <Grid item xs={6} md={6}>
              <Paper className={classes.paper}>
                <Summary title="Unrealized Profit" amount={`$${stockData.opportunities.unrealizedProfit}` || 'none'} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Trades stockData={stockData}/>
              </Paper>
            </Grid>
          </Grid>
    )
}