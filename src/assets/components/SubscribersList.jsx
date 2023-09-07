import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, Stack, Typography } from '@mui/material'
import { Button, Col, Container, Row, Table } from 'reactstrap';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import NoSubscribers from './NoSubscribers';

const SubscribersList = () => {
    document.title = "Subscribers List | Admin Dashboard";
    const Swal = require('sweetalert2');
    
    const [subscribers, setSubscribers] = useState(
        JSON.parse(localStorage.getItem("Footer")) || []
    );

    // Function on deleting a data/item on local storage
    const removeSubscriber = (index) => {

        Swal.fire({
            icon: "warning",
            title: "Are you sure, you want to remove this subscriber?",
            text: "You won't be able to revert this.",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedSubscribers = subscribers.filter((_, i) => i !== index); // Create a new array without the deleted message
                setSubscribers(updatedSubscribers); // Update the state
                localStorage.setItem("Footer", JSON.stringify(updatedSubscribers)); // Update localStorage
                
                setTimeout(() => window.location.reload(), 1200)

                Swal.fire({
                    icon: "success",
                    text: "Successfully Removed.",
                    showConfirmButton: false,
                    timer: 1200
                });
            };
        });
    };

  return (
    <>
        <Box className="mt-5">
            <Container className='container pt-5'>
                <Row>
                    <Col className='d-flex align-items-center'>
                    <Stack className='d-flex justify-content-center w-100'>
                        <Typography className='fs-1 fs-lg-3 bg-info bg-opacity-50 p-3 rounded-3 fw-bold mb-2'><LoyaltyIcon fontSize='3rem' className='me-2'/>News Letters Subscribers List</Typography>
                        <Typography variant='body2'  className='bg-info bg-opacity-50 p-3 rounded-3 fw-medium mb-3'><FormatListBulletedIcon className='me-1'/>You can view the list of newsletter subscribere here.</Typography>
                    </Stack>
                    </Col>
                </Row>
                <Row>
                    <Box className="bg-info bg-gradient bg-opacity-50 rounded-3 p-3 overflow-scroll" sx={{ height: '440px' }}>
                        {subscribers.length > 0 ? (
                            <Table className='table table-striped'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Subscriber Email</th>
                                            <th>Date Subscribe</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subscribers.map((subscriber, index) => {
                                            return (
                                                <tr>
                                                    <td>{index - -1}</td>
                                                    <td>{subscriber.email}</td>
                                                    <td>{subscriber.dateSubscribed}</td>
                                                    <td>
                                                        <Button className='btn btn-danger' onClick={() => removeSubscriber(index)}><DeleteForeverIcon/></Button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                        ) : (
                            <NoSubscribers/>
                        )}
                    </Box>
                </Row>
            </Container>
        </Box>
    </>
  )
}

export default SubscribersList;
