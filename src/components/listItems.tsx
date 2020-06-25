import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BarChartIcon from '@material-ui/icons/BarChart';

type Props = {
  companies: StockDataType[];
  handleOnClick: (company: StockDataType) => void;
}

export const mainListItems = ({ companies, handleOnClick }: Props) => (
  <div>
    {companies.map((company) => (
      <ListItem button onClick={() => handleOnClick({...company})}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary={company.name} />
      </ListItem>
    ))}
  </div>
);
