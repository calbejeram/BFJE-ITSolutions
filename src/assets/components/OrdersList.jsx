import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, Stack, Typography } from '@mui/material'
import { Button, Col, Container, Row, Table } from 'reactstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const SubscriptionList = () => {
    document.title = "Orders List | Admin Dashboard";
  return (
    <>
        <Box className="mt-5">
            <Container className='container pt-5'>
                <Row>
                    <Col className='d-flex align-items-center'>
                    <Stack className='d-flex justify-content-center w-100'>
                        <Typography variant='h3' className='bg-info bg-opacity-50 p-3 rounded-3 fw-bold mb-2'><ShoppingCartIcon fontSize='3rem' className='me-2'/>Orders List</Typography>
                        <Typography variant='body2'  className='bg-info bg-opacity-50 p-3 rounded-3 fw-medium mb-3'><FormatListBulletedIcon className='me-1'/>You can view the list of orders here.</Typography>
                    </Stack>
                    </Col>
                </Row>
                <Row>
                    <Box className="bg-info bg-gradient bg-opacity-50 rounded-3 p-3">
                        <Table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Order Title</th>
                                        <th>Customers Name</th>
                                        <th>Order Date</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1231123123</td>
                                        <td>Web Hosting</td>
                                        <td>Jeram Calbe</td>
                                        <td>09-04-23</td>
                                        <td>Pending</td>
                                        <td><Stack direction="row" spacing={1}>
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

export default SubscriptionList
