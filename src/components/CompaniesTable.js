import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import {getAllCompanies} from "../utils/dataGetters"

const CompaniesTable = ({ tableData, setTableData }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = async (event) => {
    await getAllCompanies(parseInt(event.target.value, 10), setTableData)

    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); 
  };

  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Connector</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.appRows?.map((row) => (
              <TableRow key={row.appId}>
                <TableCell>{row.appName}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.appName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25, 50]}
        component="div"
        count={tableData.totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default CompaniesTable;
