import * as React from 'react';
import Template from 'pages/Template';
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import Title from '../components/Title';

import { useLocation } from 'react-router-dom';
import { StockpileType } from 'components/StockpileType';

import { useAppDispatch, useAppSelector } from 'hooks';
import {
  fetchStockpileStatusEC,
  selectStockpileStatusEC,
} from 'stores/stockpile-slice';

import { useEffect } from 'react';

import escape from 'assets/images/icons/escape-301x194px-04A040.svg';
import { StockpileStatus } from 'schema';

const EvacuationCenter = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchStockpileStatusEC());
  }, []);
  const stockpileStatusEC = useAppSelector(selectStockpileStatusEC);
  console.log(stockpileStatusEC);

  const filtered = stockpileStatusEC.filter(
    (val) => val.evacuationCenter === query.get('ec')
  );
  console.log(query.get('ec'));

  if (filtered.length !== 0) {
    const stockpileStatus: Array<StockpileStatus> = filtered[0].stockpileStatus;
    console.log(stockpileStatus);
    return (
      <Template>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 'auto' }}>
              <CardHeader
                avatar={<Avatar src={escape} variant="square" />}
                title={query.get('ec')}
              />
              <CardContent>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  この避難所の防災備蓄に貢献する方はこちら
                </Typography>
              </CardContent>
            </Card>
          </Grid>
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
                            【備蓄数: {stockpile.currentQuantity} / 不足数:{' '}
                            {stockpile.shortQuantity}】
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
        </Grid>
      </Template>
    );
  } else {
    return (
      <Template>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 'auto' }}>
              <CardHeader
                avatar={<Avatar src={escape} variant="square" />}
                title={query.get('ec')}
              />
              <CardContent>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  避難所にいる方は、こちらから防災備蓄状況を登録してください
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <StockpileType title={'防災備蓄状況は未登録です'} />
          </Grid>
        </Grid>
      </Template>
    );
  }
};

export default EvacuationCenter;
