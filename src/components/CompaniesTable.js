import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import {getAllCompanies, getSingleCompany} from "../utils/dataGetters"
import SlideUpDialog from "./CompaniesDialog"

const CompaniesTable = ({ tableData, setTableData }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [openDialog, setOpenDialog] = useState(false);


  const handleChangePage = async (event, newPage) => {
    const resp = await getAllCompanies(setTableData, rowsPerPage, newPage)
    console.log(resp)

    if (!resp.ok) {
      await getAllCompanies(setTableData, rowsPerPage, newPage)
      setPage(newPage);
    } else {
      setPage(newPage);
    }
  };

  const handleChangeRowsPerPage = async (event) => {
    await getAllCompanies(setTableData, parseInt(event.target.value, 10))
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); 
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Paper elevation="5">
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
                <TableRow key={row.appId}  onClick={() => {handleOpenDialog()}} className='table-row'>
                  <TableCell>{row.appName}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.appSources.join(", ")}</TableCell>
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
      <SlideUpDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        title="My Slide-up Dialog"
      />
    </>
  );
};

export default CompaniesTable;
