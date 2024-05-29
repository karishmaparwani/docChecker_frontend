import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export default function BasicTable({rows}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, height: 80 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}}>Id</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Document Name</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Type Of Document&nbsp;</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Status&nbsp;</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{  height: 80 }}  //'&:last-child td, &:last-child th': { border: 0 },
            >
              <TableCell >
                {row.id}
              </TableCell>
              <TableCell scope='row'>{row.name}</TableCell>
              <TableCell >{row.type}</TableCell>
              <TableCell >{row.status}</TableCell>
              <TableCell align='right'>
                <Button variant="contained" sx={{width: '12vw'}}>{row.status === 'Reviewed' ? 'View Feedback' : 'View Document'}</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}