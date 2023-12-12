import React from 'react';
import { tableReq } from '../../types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const DataTable = ({ columns, rows }: tableReq) => {
  return (
    <TableContainer sx={{ height: '100%', overflowY: 'scroll' }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns &&
              columns.map((data) => (
                <TableCell sx={{ fontWeight: 700 }} key={data.field}>
                  {data.title}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((rowData) => (
              <TableRow key={rowData.id.toString()} sx={{ cursor: 'pointer' }}>
                {columns &&
                  columns.map((colData) => <TableCell>{rowData[colData.field]}</TableCell>)}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
