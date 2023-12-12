import React from 'react';
import { tableReq } from '../../types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DataTable = ({ columns, rows }: tableReq) => {
  const navigate = useNavigate();

  const handlerOnRowClick = (id: number) => {
    navigate(`/inspect/${id}`);
  };

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
                  columns.map((colData) => (
                    <TableCell
                      key={`${rowData[colData.field]}-${rowData.id.toString()}`}
                      onClick={() => handlerOnRowClick(rowData.id)}
                    >
                      {rowData[colData.field]}
                    </TableCell>
                  ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
