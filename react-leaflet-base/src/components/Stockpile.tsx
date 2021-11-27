import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

import { useAppSelector, useAppDispatch } from '../hooks';
import { selectStockPiles } from '../stores/stockpile-slice';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export const Stockpile = () => {

  const stockpiles = useAppSelector(selectStockPiles);

  return (
    <React.Fragment>
      <Title>stockpiles</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>address</TableCell>
            <TableCell>registrationDate</TableCell>
            <TableCell>expiryDate</TableCell>
            <TableCell align="right">stockQuantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockpiles.map((stockpile) => (
            <TableRow>
              <TableCell>{stockpile.name}</TableCell>
              <TableCell>{stockpile.address}</TableCell>
              <TableCell>{stockpile.registrationDate}</TableCell>
              <TableCell>{stockpile.expiryDate}</TableCell>
              <TableCell align="right">{stockpile.stockQuantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}

export default Stockpile
