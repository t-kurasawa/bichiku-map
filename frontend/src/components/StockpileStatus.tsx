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
  fetchStockpileStatusEC,
  selectStockpileStatusEC,
} from 'stores/stockpile-slice';

import { useEffect } from 'react';

interface Props {
  ec?: any;
}

export const StockpileStatus = (props: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchStockpileStatusEC());
    console.log('fetchStockpileStatusEC');
  }, []);
  const stockpileStatusEC = useAppSelector(selectStockpileStatusEC);
  const ecname = `${props.ec.避難所_名称}_${props.ec.住所}`;
  console.log(ecname);
  console.log(stockpileStatusEC);
  const filtered = stockpileStatusEC.filter(
    (val) => val.evacuationCenter === ecname
  );
  console.log(filtered);
  const stockpileStatus = filtered[0]?.stockpileStatus;
  if (filtered.length !== 0) {
    return (
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: '', flexDirection: 'column' }}>
          <Title>防災備蓄状況</Title>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {stockpileStatus.map((stockpile, index, row) => (
              <React.Fragment key={index.toString()}>
                <ListItem key={index.toString()} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={stockpile.item_en} src={stockpile.image} />
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
                          {stockpile.item_ja}
                        </Typography>
                        {'（分類:'}
                        {stockpile.category_ja}
                        {'）'}
                        備蓄数: {stockpile.currentQuantity} / 不足数:{' '}
                        {stockpile.shortQuantity}
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
                          {stockpile.description_ja}
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
  } else {
    console.log('not match');
    return (
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: '', flexDirection: 'column' }}>
          <Title>防災備蓄状況が登録されていません</Title>
        </Paper>
      </Grid>
    );
  }
};

export default StockpileStatus;
