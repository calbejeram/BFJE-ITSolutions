// import React from 'react'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'reactstrap';


const AdminTable = ({userArr,setuserArr}) => {
  
  const handleDelete = (userID) => {
    const updatedArr = userArr.filter((user) => userArr.userID !== userID);
    setuserArr(updatedArr);
    localStorage.setItem('ClientServiceform', JSON.stringify(updatedArr));
  }
  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Client ID</TableCell>
            <TableCell align="center">Client Name</TableCell>
            <TableCell align="center">Client Email&nbsp;</TableCell>
            <TableCell align="center">Client Contact&nbsp;</TableCell>
            <TableCell align="center">Web Package&nbsp;</TableCell>
            <TableCell align="center">Package Title&nbsp;</TableCell>
            <TableCell align="center">Package Description&nbsp;</TableCell>
            <TableCell align="center">Package Price&nbsp;</TableCell>
            <TableCell align="center">Image&nbsp;</TableCell>
            <TableCell align="center">Status&nbsp;</TableCell>
            <TableCell align="center">DELETE&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userArr.map((userArr) => (
            <TableRow
              key={userArr.userID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right"><button>EDIT</button></TableCell>
              <TableCell component="th" scope="row">{userArr.userID}</TableCell>
              <TableCell align="right">{userArr.userName}</TableCell>
              <TableCell align="right">{userArr.userEmail}</TableCell>
              <TableCell align="right">{userArr.userContact}</TableCell>
              <TableCell align="right">{userArr.userWebPackage}</TableCell>
              <TableCell align="right">{userArr.userPackagetitle}</TableCell>
              <TableCell align="right">{userArr.userPackagedescription}</TableCell>
              <TableCell align="right">{userArr.userPackageprice}</TableCell>
              <TableCell align="right">{userArr.userImage}</TableCell>
              <TableCell align="right">{userArr.userStatus}</TableCell>
              <TableCell align="right"><Button className='btn btn danger' 
                  onClick={() => handleDelete(userArr.userID)}>DELETE</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



export default AdminTable
