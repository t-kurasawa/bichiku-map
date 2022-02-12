import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Title from './Title';

import { useAppDispatch, useAppSelector } from 'hooks';
import {
  fetchStockpileType,
  selectStockpileTypes,
} from 'stores/stockpile-slice';

import { useEffect } from 'react';

interface Props {
  title: string;
}

export const StockpileType = (props: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchStockpileType());
  }, []);
  const stockpileTypes = useAppSelector(selectStockpileTypes);

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: '', flexDirection: 'column' }}>
        <Title>{props.title}</Title>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {stockpileTypes.map((stockpileType, index, row) => (
            <React.Fragment key={index.toString()}>
              <ListItem key={index.toString()} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={stockpileType.item_en}
                    src={stockpileType.image}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {stockpileType.item_ja}
                      </Typography>
                      {'（分類:'}
                      {stockpileType.category_ja}
                      {'）'}
                    </>
                  }
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {stockpileType.description_ja}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {index + 1 === row.length ? null : (
                <Divider variant="inset" component="li" />
              )}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Grid>
  );
};

export default StockpileType;
