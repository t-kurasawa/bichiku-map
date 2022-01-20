import { Card, CardMedia, CardContent, Grid, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchStockpile, selectStockpileList } from 'stores/stockpile-slice';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState, useEffect } from 'react';

export const Stockpile = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchStockpile());
  });
  const stockpileList = useAppSelector(selectStockpileList);

  const [age, setAge] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {stockpileList.map((stockpile) => (
            <MenuItem
              key={stockpile.id.toString()}
              value={stockpile.id.toString()}
            >
              {stockpile.item_ja}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {stockpileList.map((stockpile) => (
        <Grid item xs={4} key={stockpile.id.toString()}>
          <Card key={stockpile.id.toString()} sx={{ maxWidth: 'auto' }}>
            <CardMedia
              component="img"
              height="400"
              image={stockpile.image}
              alt={stockpile.item_en}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {stockpile.item_ja}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stockpile.description_ja}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Stockpile;
