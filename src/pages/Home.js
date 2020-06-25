import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Typography } from '@material-ui/core';
import { mainListItems } from '../components/listItems';
import Header from '../components/Header';
import { CompanyAnalytics } from '../components/CompanyAnalytics';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const DATA = [
  {
    id: 0,
    name: 'Tesla',
    prices: [65, 59, 80, 81, 56, 55, 40],
  },
  {
    id: 1,
    name: 'Apple',
    prices: [10, 20, 30, 41, 56, 55, 40],
  },
  {
    id: 2,
    name: 'Microsoft',
    prices: [100, 70, 50, 20, 40, 70, 80],
  },
  {
    id: 3,
    name: 'Boosted.ai',
    prices: [20, 50, 30, 70, 50, 30, 5, 15, 10, 25, 50, 70],
  },
  {
    id: 4,
    name: 'Nikola',
    prices: [100, 90, 80, 70, 60, 50, 45, 30, 5, 4, 3, 0],
  },
];

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [stockData, setStockData] = React.useState();

  console.log({ stockData });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems({ companies: DATA, handleOnClick: (company) => setStockData({ ...company }) })}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          { stockData
            ? <CompanyAnalytics stockData={stockData} />
            : <Typography>Please select a company</Typography>}
        </Container>
      </main>
    </div>
  );
}
