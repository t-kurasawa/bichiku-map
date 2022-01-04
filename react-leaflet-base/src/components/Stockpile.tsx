import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from 'components/Title';

import { useAppSelector } from '../hooks';
import { selectStockPile } from '../stores/stockpile-slice';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export const Stockpile = () => {
  const stockpile = useAppSelector(selectStockPile);

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <Title>防災備蓄リスト</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>備蓄品名</TableCell>
              <TableCell>保管場所</TableCell>
              <TableCell>備蓄数</TableCell>
              <TableCell>登録日</TableCell>
              <TableCell>賞味期限</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stockpile.stockpileList.map((stockpile) => (
              <TableRow key={stockpile.id}>
                <TableCell>{stockpile.name}</TableCell>
                <TableCell>{stockpile.address}</TableCell>
                <TableCell>{stockpile.registrationDate}</TableCell>
                <TableCell>{stockpile.expiryDate}</TableCell>
                <TableCell>{stockpile.stockQuantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more orders
        </Link>
      </Paper>
    </Grid>
  );
};

export default Stockpile;
