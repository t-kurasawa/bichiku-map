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
import { fetchStockpile, selectStockpiles } from 'stores/stockpile-slice';

import { useEffect } from 'react';

export const Stockpile = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchStockpile());
  }, []);
  const stockpiles = useAppSelector(selectStockpiles);

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: '', flexDirection: 'column' }}>
        <Title>防災備蓄品リスト</Title>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {stockpiles.map((stockpile, i, row) => (
            <>
              <ListItem key={stockpile.id.toString()} alignItems="flex-start">
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
              {i + 1 === row.length ? null : (
                <Divider variant="inset" component="li" />
              )}
            </>
          ))}
        </List>
      </Paper>
    </Grid>
  );
};

export default Stockpile;
