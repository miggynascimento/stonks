import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Summary({title, amount}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Typography component="p" variant="h4">
        {amount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        as of Today
      </Typography>
    </React.Fragment>
  );
}
