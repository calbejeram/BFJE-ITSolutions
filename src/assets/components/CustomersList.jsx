import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, Stack, Typography } from '@mui/material';
import { Button, Col, Container, Row, Table } from 'reactstrap';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const AccountChangePassword = () => {
    document.title = "Customers List | Admin Dashboard";

    const [emails, setEmails] = useState(
        JSON.parse(localStorage.getItem('Footer')) || []
    );

    useEffect(() => {
        // Save the customers data to localStorage whenever it changes
        localStorage.setItem('Footer', JSON.stringify(emails));
    }, [emails]);

  return (
    <>
        <Box className="mt-5">
        <Container className='container pt-5'>
            <Row>
                <Col className='d-flex align-items-center'>
                  <Stack className='d-flex justify-content-center w-100'>
                      <Typography variant='h3' className='bg-success bg-opacity-50 p-3 rounded-3 fw-bold mb-2'><PeopleAltIcon fontSize='3rem' className='me-2'/>Customers List</Typography>
                      <Typography variant='body2' className='bg-success bg-opacity-50 p-3 rounded-3 fw-medium mb-3'><FormatListBulletedIcon className='me-1'/>You can view the list of customers here.</Typography>
                  </Stack>
                </Col>
            </Row>
            <Row>
                <Box className="bg-success bg-gradient bg-opacity-50 rounded-3 p-3">
                <Table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Customers ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Order Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1231123123</td>
                            <td>Jeram</td>
                            <td>Calbe</td>
                            <td>Website Hosting</td>
                            <td>
                                <Stack direction="row" spacing={1}>
                                    <Button className='btn btn-success'><EditIcon/></Button>
                                    <Button className='btn btn-danger'><DeleteForeverIcon/></Button>
                                </Stack>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Box>
            </Row>
        </Container>
      </Box>
    </>
  )
}

export default AccountChangePassword
